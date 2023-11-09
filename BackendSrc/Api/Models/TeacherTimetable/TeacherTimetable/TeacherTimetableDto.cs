using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;
using Api.Models.TeacherTimetable.AvailableHours;

namespace Api.Models.TeacherTimetable.TeacherTimetable
{
    public class TeacherTimetableDto
    {
        [Required]
        [DisplayName( "id" )]
        [JsonPropertyName( "id" )]
        public int Id { get; set; }

        [Required]
        [DisplayName( "subjectName" )]
        [JsonPropertyName( "subjectName" )]
        public string SubjectName { get; set; }

        [Required]
        [DisplayName( "subjectId" )]
        [JsonPropertyName( "subjectId" )]
        public int SubjectId { get; set; }

        [Required]
        [DisplayName( "teacherName" )]
        [JsonPropertyName( "teacherName" )]
        public string TeacherName { get; set; }

        [Required]
        [DisplayName( "teacherId" )]
        [JsonPropertyName( "teacherId" )]
        public int TeacherId { get; set; }

        [Required]
        [DisplayName( "availableHours" )]
        [JsonPropertyName( "availableHours" )]
        public List<AvailableHoursDto> AvailableHours { get; set; }

        [Required]
        [DisplayName( "distributedHoursToPlan" )]
        [JsonPropertyName( "distributedHoursToPlan" )]
        public int DistributedHoursToPlan { get; set; }

        [Required]
        [DisplayName( "hoursToPlan" )]
        [JsonPropertyName( "hoursToPlan" )]
        public int HoursToPlan { get; set; }

        [Required]
        [DisplayName( "creditHours" )]
        [JsonPropertyName( "creditHours" )]
        public int CreditHours { get; set; }

        [Required]
        [DisplayName( "workedOverPlan" )]
        [JsonPropertyName( "workedOverPlan" )]
        public int WorkedOverPlan { get; set; }
    }
}
