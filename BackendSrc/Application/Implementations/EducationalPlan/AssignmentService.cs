using Application.Abstractions.EductionalPlan;
using Application.Models.EducationalPlan;
using DatabaseProvider.Repositories.Abstractions.AssignmentEntities;
using DatabaseProvider.Repositories.Abstractions.SubjectEntities;
using DatabaseProvider.Repositories.Abstractions.TeacherEntities;
using Domain.AssignmentEntities;
using Domain.SubjectEntities;
using Domain.TeacherEntities;

namespace Application.Implementations.EducationalPlan
{
    internal sealed class AssignmentService : IAssignmentService
    {
        private readonly IAssignmentRepository _assignmentRepository;
        private readonly ISubjectRepository _subjectRepository;
        private readonly ITeacherRepository _teacherRepository;

        public AssignmentService( IAssignmentRepository assignmentRepository, ISubjectRepository subjectRepository, ITeacherRepository teacherRepository )
        {
            _assignmentRepository = assignmentRepository;
            _subjectRepository = subjectRepository;
            _teacherRepository = teacherRepository;
        }

        public List<Assignment> GetAssignmentsByYear( int year )
        {
            return _assignmentRepository.GetBatchByYear( year );
        }

        public Assignment GetAssignmentById( int id )
        {
            return _assignmentRepository.GetById( id );
        }

        public List<AssignmentDifference> GetDifferencesByYear( int year )
        {
            // TODO Реализовать
            return new List<AssignmentDifference> { new AssignmentDifference() };
        }

        public void AddAssignment( int year, int classNumber, string subjectName, string teacherName, int groupCount )
        {
            Subject subject = _subjectRepository.GetSubjectByName( subjectName );
            Teacher teacher = _teacherRepository.GetTeacherByName( subjectName );

            if ( subject is not null && teacher is not null )
            {
                Assignment newAssignment = new Assignment
                {
                    Id = year,
                    SubjectId = subject.Id,
                    GroupCount = groupCount,
                    TeacherId = teacher.Id,
                    ClassNumber = classNumber,
                    Year = year
                };

                _assignmentRepository.Add( newAssignment );
            }
        }

        public void UpdateAssignment( int year, int classNumber, string subjectName, string teacherName, int groupCount )
        {
            Subject subject = _subjectRepository.GetSubjectByName( subjectName );
            Teacher teacher = _teacherRepository.GetTeacherByName( teacherName );

            if ( subject is not null && teacher is not null )
            {
                Assignment newAssignment = new Assignment
                {
                    Id = year,
                    SubjectId = subject.Id,
                    GroupCount = groupCount,
                    TeacherId = teacher.Id,
                    ClassNumber = classNumber,
                    Year = year
                };

                _assignmentRepository.Update( newAssignment );
            }
        }

        public void DeleteAssignment( int id )
        {
            Assignment assignment = _assignmentRepository.GetById( id );
            if ( assignment is not null )
            {
                _assignmentRepository.Remove( assignment );
            }
        }
    }
}
