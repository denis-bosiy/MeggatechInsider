namespace Domain.TeacherEntities
{
    public class Education : Entity
    {
        public string EducationName { get; init; }

        public List<Teacher> Teachers { get; set; }

        public Education( string educationName )
        {
            EducationName = educationName;
        }
    }
}