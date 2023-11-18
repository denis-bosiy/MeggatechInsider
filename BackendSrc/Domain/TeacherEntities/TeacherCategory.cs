namespace Domain.TeacherEntities
{
    public class TeacherCategory : Entity
    {
        public string TeacherCategoryName { get; set; }

        public List<Teacher> Teachers { get; } = new List<Teacher>();

        public TeacherCategory( string teacherCategoryName )
        {
            TeacherCategoryName = teacherCategoryName;
        }
    }
}