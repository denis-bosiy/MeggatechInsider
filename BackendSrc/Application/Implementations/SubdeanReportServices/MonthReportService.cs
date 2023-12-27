using Application.Abstractions.SubdeanReportServices;
using Application.Abstractions.TimetableServices.StudentGroupServices;
using Application.Models.ActualAcademicHours;
using DatabaseProvider.Repositories.Abstractions.TimetableEntities.LessonEntities;
using DatabaseProvider.Repositories.Abstractions.TimetableEntities.StudentGroupEntities;
using Domain.SubjectEntities;
using Domain.TeacherEntities;
using Domain.TimetableEntities.LessonEntities;
using Domain.TimetableEntities.StudentGroupEntities;

namespace Application.Implementations.SubdeanReportServices
{
    public class MonthReportService : IMonthReportService
    {
        private readonly ILessonRepository _lessonRepository;
        private readonly IStudentGroupService _studentGroupService;
        private readonly IClassStudentGroupRepository<ClassStudentGroup> _classStudentGroupRepository;
        private readonly IClassStudentGroupRepository<VerticalSubgroupStudentGroup> _verticalSubgroupStudentGroupRepository;

        public MonthReportService( 
            ILessonRepository lessonRepository, 
            IStudentGroupService studentGroupService, 
            IClassStudentGroupRepository<ClassStudentGroup> classStudentGroupRepository,
            IClassStudentGroupRepository<VerticalSubgroupStudentGroup> verticalSubgroupStudentGroupRepository )
        {
            _lessonRepository = lessonRepository;
            _studentGroupService = studentGroupService;
            _classStudentGroupRepository = classStudentGroupRepository;
            _verticalSubgroupStudentGroupRepository = verticalSubgroupStudentGroupRepository;
        }

        public MonthActualAcademicHoursReport GenerateMonthReport( int year, int month, ContractType contractType )
        {
            List<Lesson> studyingActivities = _lessonRepository.GetByMonth( year, month );
            List<Lesson> lessonsWithAllPaymentTypes = studyingActivities.Where( l => l.LessonType != LessonType.Parade ).ToList();
            List<Lesson> lessons = lessonsWithAllPaymentTypes.Where( l => l.Teacher.ContractType == contractType ).ToList();

            MonthActualAcademicHoursReport report = new MonthActualAcademicHoursReport();
            report.Year = year;
            report.Month = month;
            report.ContractType = contractType;

            report.AcademicHoursForSubjectsByTeachers = new List<ActualAcademicHoursForSubjectsByTeacher>();
            List<Teacher> teachers = lessons.Select( l => l.Teacher ).Distinct().ToList();
            foreach ( Teacher teacher in teachers )
            {
                List<Lesson> lessonsForTeacher = lessons.Where( l => l.Teacher.Id == teacher.Id ).ToList();
                report.AcademicHoursForSubjectsByTeachers.Add( GenerateMonthReportByTeacher( lessonsForTeacher, teacher ) );
            }

            return report;
        }

        private ActualAcademicHoursForSubjectsByTeacher GenerateMonthReportByTeacher( 
            List<Lesson> lessonsForTeacher, Teacher teacher )
        {
            ActualAcademicHoursForSubjectsByTeacher result = new ActualAcademicHoursForSubjectsByTeacher();
            result.TeacherName = teacher.TeacherName;

            result.MonthComment = null;

            result.AcademicHoursForTeachers = new List<ActualAcademicHoursForClassesBySubject>();
            List<Subject> subjects = lessonsForTeacher.Select( l => l.Subject ).Distinct().ToList();
            foreach ( Subject subject in subjects )
            {
                List<Lesson> lessonsForSubject = lessonsForTeacher.Where( l => l.Subject.Id == subject.Id ).ToList();
                result.AcademicHoursForTeachers.Add( GenerateMonthReportForSubject( lessonsForSubject, subject ) );
            }

            return result;
        }

        private ActualAcademicHoursForClassesBySubject GenerateMonthReportForSubject( 
            List<Lesson> lessonsForSubject, Subject subject )
        {
            ActualAcademicHoursForClassesBySubject result = new ActualAcademicHoursForClassesBySubject();
            result.SubjectName = subject.SubjectName;

            result.AcademicHoursForClasses = new List<ActualAcademicHoursForSubgroupsByClass>();
            List<LessonClasses> lessonClasses = new List<LessonClasses>();
            List<string> classGuids = new List<string>();
            foreach ( Lesson lesson in lessonsForSubject )
            {
                List<string> lessonClassGuids = _studentGroupService.GetClassGuidsByStudentGroupGuid( lesson.StudentGroupGuid );
                lessonClasses.Add( new LessonClasses
                {
                    Lesson = lesson,
                    ClassGuids = lessonClassGuids
                } );
                classGuids.AddRange( lessonClassGuids );
            }

            classGuids = classGuids.Distinct().ToList();
            foreach ( string classGuid in classGuids )
            {
                List<LessonClasses> lessonsForClass = lessonClasses.Where( lc => lc.ClassGuids.Contains( classGuid ) ).ToList();
                result.AcademicHoursForClasses.Add( GenerateMonthReportForClass( lessonsForClass, classGuid ) );
            }
            return result;
        }

        private ActualAcademicHoursForSubgroupsByClass GenerateMonthReportForClass( 
            List<LessonClasses> lessonForClass, string guid )
        {
            ActualAcademicHoursForSubgroupsByClass result = new ActualAcademicHoursForSubgroupsByClass();
            ClassStudentGroup classStudentGroup = _classStudentGroupRepository.GetByGuid( guid );
            string parallelPrefix = classStudentGroup.Parallel == Domain.GenericEntities.Parallel.Tenth 
                ? "10" : "11";
            result.ClassName = $"{parallelPrefix}-{classStudentGroup.ClassNumber}";

            result.AcademicHoursForSubgroups = new List<ActualAcademicHoursForSubgroup>();
            if ( lessonForClass.First().Lesson.StudentGroupType == StudentGroupType.VerticalSubgroup )
            {
                List<string> subgroupGuids = lessonForClass.Select( lc => lc.Lesson.StudentGroupGuid ).Distinct().ToList();
                foreach ( string subgroupGuid in subgroupGuids )
                {
                    result.AcademicHoursForSubgroups.Add( GenerateReportForSubgroup( lessonForClass, subgroupGuid, result.ClassName ) );
                }
            }
            else
            {
                Dictionary<DateOnly, int> hoursByDays = new Dictionary<DateOnly, int>();
                List<DateOnly> days = lessonForClass.Select( lc => lc.Lesson.Date ).Distinct().ToList();
                foreach ( DateOnly day in days ) 
                {
                    int hours = lessonForClass.Select( lc => lc.Lesson.LessonType == LessonType.Lesson ? 1 : 2 ).Sum();
                    hoursByDays.Add( day, hours );
                }
                result.AcademicHoursForSubgroups.Add( new ActualAcademicHoursForSubgroup
                {
                    SubgroupName = $"{result.ClassName}",
                    AcademicHoursByDate = hoursByDays,
                    RemoteAcademicHours = lessonForClass.Where( lc => lc.Lesson.Classroom == -1 )
                        .Select( lc => lc.Lesson.LessonType == LessonType.Lesson ? 1 : 2 ).Sum(),
                    TotalAcademicHours = lessonForClass.Select( lc => lc.Lesson.LessonType == LessonType.Lesson ? 1 : 2 ).Sum()
                } );
            }

            return result;
        } 

        private ActualAcademicHoursForSubgroup GenerateReportForSubgroup( 
            List<LessonClasses> lessonForClass, string subgroupGuid, string className )
        {
            List<Lesson> lessonForSubgroup = lessonForClass.Where( l => l.Lesson.StudentGroupGuid == subgroupGuid )
                .Select( l => l.Lesson ).ToList();
            Dictionary<DateOnly, int> hoursByDay = new Dictionary<DateOnly, int>();
            List<DateOnly> days = lessonForSubgroup.Select( l => l.Date ).Distinct().ToList();
            foreach ( DateOnly day in days )
            {
                int hours = lessonForSubgroup.Select( l => l.LessonType == LessonType.Lesson ? 1 : 2 ).Sum();
                hoursByDay.Add( day, hours );
            }
            ActualAcademicHoursForSubgroup result = new ActualAcademicHoursForSubgroup();
            result.SubgroupName = $"{className}-{_verticalSubgroupStudentGroupRepository.GetByGuid( subgroupGuid ).SubgroupNumber}";
            result.AcademicHoursByDate = hoursByDay;
            result.RemoteAcademicHours = lessonForSubgroup.Where( l => l.Classroom == -1 )
                .Select( l => l.LessonType == LessonType.Lesson ? 1 : 2 ).Sum();
            result.TotalAcademicHours = lessonForSubgroup
                .Select( l => l.LessonType == LessonType.Lesson ? 1 : 2 ).Sum();
            return result;
        }

        internal class LessonClasses
        {
            internal Lesson Lesson { get; set; }
            internal List<string> ClassGuids { get; set; }
        }
    }
}
