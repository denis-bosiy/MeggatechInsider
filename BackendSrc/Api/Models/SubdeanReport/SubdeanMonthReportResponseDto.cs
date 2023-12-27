using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.SubdeanReport
{
    public class SubdeanMonthReportResponseDto
    {
        [Required]
        [JsonPropertyName( "startingDayNumber" )]
        public int StartingDayNumber { get; set; }

        [Required]
        [JsonPropertyName( "dayCount" )]
        public int DayCount { get; set; }

        [Required]
        [JsonPropertyName( "hours" )]
        public List<SubdeanMonthReportResponseHoursDto> Hours { get; set; }
    }

    public class SubdeanMonthReportResponseHoursDto
    {
        [Required]
        [JsonPropertyName( "teacher" )]
        public string TeacherName { get; set; }

        [Required]
        [JsonPropertyName( "subjects" )]
        public List<SubdeanMonthReportResponseSubjectDto> Subjects { get; set; }
    }

    public class SubdeanMonthReportResponseSubjectDto
    {
        [Required]
        [JsonPropertyName( "title" )]
        public string Title { get; set; }

        [Required]
        [JsonPropertyName( "classes" )]
        public List<SubdeanMonthReportResponseClassDto> Classes { get; set; }
    }

    public class SubdeanMonthReportResponseClassDto
    {
        [Required]
        [JsonPropertyName( "number" )]
        public string ClassNumber { get; set; }

        [Required]
        [JsonPropertyName( "groups" )]
        public List<SubdeanMonthReportResponseGroupDto> Groups { get; set; }
    }

    public class SubdeanMonthReportResponseGroupDto
    {
        [Required]
        [JsonPropertyName( "number" )]
        public string GroupNumber { get; set; }

        [Required]
        [JsonPropertyName( "hours" )]
        public List<int> Hours { get; set; }

        [Required]
        [JsonPropertyName( "combined" )]
        public int CombinedHours { get; set; }

        [Required]
        [JsonPropertyName( "remoted" )]
        public int RemoteHours { get; set; }

        [Required]
        [JsonPropertyName( "amount" )]
        public int TotalHours { get; set; }
    }
}
