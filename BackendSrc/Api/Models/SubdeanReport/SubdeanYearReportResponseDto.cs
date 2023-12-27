using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Api.Models.SubdeanReport
{
    public class SubdeanYearReportResponseDto
    {
        [Required]
        [JsonPropertyName( "dates" )]
        public List<string> Dates { get; set; }

        [Required]
        [JsonPropertyName( "dayCount" )]
        public int DayCount { get; set; }

        [Required]
        [JsonPropertyName( "teachers" )]
        public List<SubdeanYearReportResponseHoursDto> Teachers { get; set; }
    }

    public class SubdeanYearReportResponseHoursDto
    {
        [Required]
        [JsonPropertyName( "teacher" )]
        public string TeacherName { get; set; }

        [Required]
        [JsonPropertyName( "subjects" )]
        public List<SubdeanYearReportResponseSubjectDto> Subjects { get; set; }
    }

    public class SubdeanYearReportResponseSubjectDto
    {
        [Required]
        [JsonPropertyName( "subject" )]
        public string Subject { get; set; }

        [Required]
        [JsonPropertyName( "classes" )]
        public List<SubdeanYearReportResponseClassDto> Classes { get; set; }
    }

    public class SubdeanYearReportResponseClassDto
    {
        [Required]
        [JsonPropertyName( "number" )]
        public string ClassNumber { get; set; }

        [Required]
        [JsonPropertyName( "hoursPlanned" )]
        public int HoursPlanned { get; set; }

        [Required]
        [JsonPropertyName( "doneHours" )]
        public List<int> HoursDone { get; set; }

        [Required]
        [JsonPropertyName( "totalDoneHours" )]
        public int TotalDoneHours { get; set; }

        [Required]
        [JsonPropertyName( "doneDistanceHours" )]
        public int DoneRemotedHours { get; set; }

        [Required]
        [JsonPropertyName( "doneCombinedHours" )]
        public int DoneCombinedHours { get; set; }
    }
}
