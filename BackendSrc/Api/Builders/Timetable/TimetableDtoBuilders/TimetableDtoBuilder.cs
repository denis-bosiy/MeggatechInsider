using Api.Models.Timetable;
using Application.Abstractions.TimetableServices.StudentGroupServices;
using Domain.TimetableEntities.LessonEntities;
using Domain.TimetableEntities.StudentGroupEntities;

namespace Api.Builders.Timetable.TimetableDtoBuilders
{
    public class TimetableDtoBuilder : ITimetableDtoBuilder
    {
        private readonly TimetableResponseDto _timetableResponseDto = new TimetableResponseDto();

        private readonly IStudentGroupService _studentGroupService;

        public TimetableDtoBuilder( IStudentGroupService studentGroupService ) 
        {
            _studentGroupService = studentGroupService;
        }

        public void SetCells( List<Lesson> lessons )
        {
            _timetableResponseDto.Cells = new List<CellDto>();
            foreach( Lesson lesson in lessons ) 
            {
                CellDto cell = new CellDto();
                cell.CellId = lesson.Id;
                cell.WeekDay = lesson.Date.DayOfWeek;
                cell.StartTime = lesson.StartTime;
                cell.EndTime = lesson.EndTime;
                cell.Classroom = lesson.Classroom;
                cell.IsOnline = lesson.Classroom == -1;
                cell.IsParallel = lesson.StudentGroupType == StudentGroupType.Liceum;
                cell.IsClass = lesson.StudentGroupType == StudentGroupType.Parallel;
                cell.IsGroup = lesson.StudentGroupType == StudentGroupType.Class;
                cell.IsPair = lesson.LessonType == LessonType.Pair;
                cell.IsLesson = lesson.LessonType == LessonType.Lesson;

                cell.NumberOfGroup = lesson.NumberOfGroups;
                cell.CurrentGroup = lesson.CurrentGroup;

                cell.Subject = new SubjectDto();
                cell.Subject.SubjectId = lesson.SubjectId;
                cell.Subject.SubjectName = lesson.Subject.SubjectName;
                cell.Subject.TeacherName = lesson.Teacher.TeacherName;

                cell.Class = new List<ShortClassInfoDto>();
                List<string> classGuids = _studentGroupService.GetClassGuidsByStudentGroupGuid( lesson.StudentGroupGuid );
                foreach ( string classGuid in classGuids )
                {
                    cell.Class.Add( new ShortClassInfoDto { ClassId = classGuid } );
                }
            }
        }

        public void SetSchoolMeeting( Lesson schoolMeeting )
        {
            SchoolMeetingDto schoolMeetingDto = new SchoolMeetingDto();
            schoolMeetingDto.Text = schoolMeeting.ParadeText;
            schoolMeetingDto.WeekDay = schoolMeeting.Date.DayOfWeek;
            schoolMeetingDto.StartTime = schoolMeeting.StartTime;
            schoolMeetingDto.EndTime = schoolMeeting.EndTime;
            _timetableResponseDto.SchoolMeeting = schoolMeetingDto;
        }

        public TimetableResponseDto GetResult() => _timetableResponseDto;
    }
}
