using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace Api.Models.TeacherTimetable
{
    public class TeacherTimetableDto
    {
        [JsonPropertyName( "id" )]
        public int Id { get; set; }

        [JsonPropertyName( "subjectName" )]
        public string SubjectName { get; set; }

        [JsonPropertyName( "subjectId" )]
        public int SubjectId { get; set; }

        [JsonPropertyName( "teacherName" )]
        public string TeacherName { get; set; }

        [JsonPropertyName( "teacherId" )]
        public int TeacherId { get; set; }

        [JsonPropertyName( "availableHours" )]
        public List<AvailableHoursByWeekDayDto> AvailableHoursByWeekDay { get; set; }

        [JsonPropertyName( "distributedHoursToPlan" )]
        public int DistributedHoursToPlan { get; set; }

        [JsonPropertyName( "hoursToPlan" )]
        public int HoursToPlan { get; set; }

        [JsonPropertyName( "creditHours" )]
        public int CreditHours { get; set; }

        [JsonPropertyName( "workedOverPlan" )]
        public int WorkedOverPlan { get; set; }
    }
}
