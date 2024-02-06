using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.EducationPlanByMonth.Timesheet
{
    public sealed class TimesheetResponseDto
    {
        [Required]
        [DisplayName( "startingDayNumber" )]
        [JsonPropertyName( "startingDayNumber" )]
        public int StartingDayNumber { get; set; }

        [Required]
        [DisplayName( "dayCount" )]
        [JsonPropertyName( "dayCount" )]
        public int DayCount { get; set; }

        [Required]
        [DisplayName( "hours" )]
        [JsonPropertyName( "hours" )]
        public List<TimesheetHours> Hours { get; set; }


    }

    public sealed class TimesheetHours
    {
        [Required]
        [DisplayName( "teacher" )]
        [JsonPropertyName( "teacher" )]
        public string Teacher { get; set; }

        [Required]
        [DisplayName( "subjects" )]
        [JsonPropertyName( "subjects" )]
        public List<TimesheetHoursSubject> Subjects { get; set; }
    }

    public sealed class TimesheetHoursSubject
    {
        [Required]
        [DisplayName( "title" )]
        [JsonPropertyName( "title" )]
        public string Title { get; set; }

        [Required]
        [DisplayName( "classes" )]
        [JsonPropertyName( "slasses" )]
        public List<TimesheetHoursSubjectClass> Classes { get; set; }
    }

    public sealed class TimesheetHoursSubjectClass
    {
        [Required]
        [DisplayName( "number" )]
        [JsonPropertyName( "number" )]
        public string Number { get; set; }

        [Required]
        [DisplayName( "groups" )]
        [JsonPropertyName( "groups" )]
        public List<TimesheetHoursSubjectClassGroup> Groups { get; set; }
    }

    public sealed class TimesheetHoursSubjectClassGroup
    {
        [Required]
        [DisplayName( "number" )]
        [JsonPropertyName( "number" )]
        public string Number { get; set; }

        [Required]
        [DisplayName( "hours" )]
        [JsonPropertyName( "hours" )]
        public List<int> Hours { get; set; }

        [Required]
        [DisplayName( "combined" )]
        [JsonPropertyName( "combined" )]
        public int Combined { get; set; }

        [Required]
        [DisplayName( "remoted" )]
        [JsonPropertyName( "remoted" )]
        public int Remoted { get; set; }

        [Required]
        [DisplayName( "amount" )]
        [JsonPropertyName( "amount" )]
        public int Amount { get; set; }
    }
}
