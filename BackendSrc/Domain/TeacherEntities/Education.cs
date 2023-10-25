namespace Domain.TeacherEntities
{
    public class Education
    {
        public string EducationName { get; init; }

        public Education( string educationName )
        {
            EducationName = educationName;
        }
    }
}