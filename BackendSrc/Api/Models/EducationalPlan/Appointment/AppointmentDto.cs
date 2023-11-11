using System.Text.Json.Serialization;

namespace Api.Models.EducationalPlan.Appointment
{
    public sealed class AppointmentDto
    {
        [JsonPropertyName( "name" )]
        public string Name { get; set; }

        [JsonPropertyName( "teacher" )]
        public string TeacherName { get; set; }

        [JsonPropertyName( "group_count" )]
        public int GroupsCount { get; set; }

        [JsonPropertyName( "hours_by_plan_on_class_of_the_students" )]
        public int StudentClassAllHours { get; set; }

        [JsonPropertyName( "hours_on_week_for_the_class_of_the_students" )]
        public int StudentClassWeekHours { get; set; }

        [JsonPropertyName( "hours_on_week_on_year_on_the_teacher" )]
        public int TeacherWeekYearHours { get; set; }

        [JsonPropertyName( "hours_on_week_on_period_on_the_teacher" )]
        public int TeacherWeekPeriodHours { get; set; }

        [JsonPropertyName( "hours_in_1_subgroup" )]
        public int FirstSubgroupHours { get; set; }

        [JsonPropertyName( "hours_in_2_subgroup" )]
        public int SecondSubgroupHours { get; set; }

        [JsonPropertyName( "total_in_year" )]
        public int YearTotalHours { get; set; }

        [JsonPropertyName( "bid_share" )]
        public int BidShare { get; set; }
    }
}
