namespace Api.Models.EducationPlanCourses.Teacher
{
    public class TeacherDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string WorkingContract { get; set; }
        public DateOnly WorkingStartDate { get; set; }
        public int WorkExperience { get; set; }
        public int WorkExperienceAtTheTimeOfTheEmployment { get; set; }
        public DateOnly BirthDay { get; set; }
        public int Age { get; set; }
    }
}
