using System.Text.Json.Serialization;

namespace Api.Models.EducationalPlan.Appointment
{
    public sealed class AssignmentDto
    {
        [JsonPropertyName( "id" )]
        public int Id { get; set; }

        [JsonPropertyName( "name" )]
        public string Name { get; set; }

        [JsonPropertyName( "teacher" )]
        public string TeacherName { get; set; }

        [JsonPropertyName( "groupCount" )]
        public int GroupsCount { get; set; }

        [JsonPropertyName( "hoursByPlanOnClassOfTheStudents" )]
        public int StudentClassAllHours { get; set; }

        [JsonPropertyName( "hoursOnWeekForTheClassOfTheStudents" )]
        public int StudentClassWeekHours { get; set; }

        [JsonPropertyName( "hoursOnWeekOnYearOnTheTeacher" )]
        public int TeacherWeekYearHours { get; set; }

        [JsonPropertyName( "hoursOnWeekOnPeriodOnTheTeacher" )]
        public int TeacherWeekPeriodHours { get; set; }

        [JsonPropertyName( "hoursIn1Subgroup" )]
        public int FirstSubgroupHours { get; set; }

        [JsonPropertyName( "hoursIn2Subgroup" )]
        public int SecondSubgroupHours { get; set; }

        [JsonPropertyName( "totalInYear" )]
        public int YearTotalHours { get; set; }

        [JsonPropertyName( "bidShare" )]
        public int BidShare { get; set; }
    }
}
