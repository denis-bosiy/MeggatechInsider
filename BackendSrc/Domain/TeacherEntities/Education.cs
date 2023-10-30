namespace Domain.TeacherEntities
{
    public class Education : Entity
    {
        public string EducationName { get; init; }

        public Education( string educationName )
        {
            EducationName = educationName;
        }
    }
}