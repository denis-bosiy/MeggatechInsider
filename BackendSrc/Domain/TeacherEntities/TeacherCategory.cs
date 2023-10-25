namespace Domain.TeacherEntities
{
    public class TeacherCategory
    {
        public string TeacherCategoryName { get; init; }

        public TeacherCategory( string teacherCategoryName )
        {
            TeacherCategoryName = teacherCategoryName;
        }
    }
}