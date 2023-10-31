namespace Domain.TeacherEntities
{
    public class TeacherCategory : Entity
    {
        public string TeacherCategoryName { get; init; }

        public List<Teacher> Teachers { get; set; }

        public TeacherCategory( string teacherCategoryName )
        {
            TeacherCategoryName = teacherCategoryName;
        }
    }
}