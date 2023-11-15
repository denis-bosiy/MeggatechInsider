using Api.Models.EducationalPlan.Appointment;
using Domain.AssignmentEntities;

namespace Api.Mappers.EducationalPlan
{
    public static class AppointmentMapper
    {
        public static AssignmentsResponseDto Map( this IEnumerable<Assignment> assignments )
        {
            return new AssignmentsResponseDto()
            {
                Assignments = assignments.Select( x => x.Map() ).ToList()
            };
        }

        public static AssignmentDto Map( this Assignment assignment )
        {
            // TODO Вычислять
            return new AssignmentDto()
            {
                Id = assignment.Id,
                Name = "Назначение 1",
                TeacherName = assignment.Teacher.TeacherName,
                GroupsCount = assignment.GroupCount,
                StudentClassAllHours = 5,
                StudentClassWeekHours = 5,
                TeacherWeekYearHours = 3,
                TeacherWeekPeriodHours = 3,
                FirstSubgroupHours = 2,
                SecondSubgroupHours = 2,
                YearTotalHours = 10,
                BidShare = 13
            };
        }
    }
}
