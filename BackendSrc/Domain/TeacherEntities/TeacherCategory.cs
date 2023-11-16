namespace Domain.TeacherEntities
{
    public class TeacherCategory : Entity
    {
        public string TeacherCategoryName { get; set; }

        public List<Teacher> Teachers { get; set; }

        public TeacherCategory()
        {
        }

        public TeacherCategory( string teacherCategoryName )
        {
            TeacherCategoryName = teacherCategoryName;
        }
    }
}