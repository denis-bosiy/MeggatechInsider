namespace Domain.TeacherEntities
{
    public class TeacherCategory : Entity
    {
        public string TeacherCategoryName { get; init; }

        public TeacherCategory( string teacherCategoryName )
        {
            TeacherCategoryName = teacherCategoryName;
        }
    }
}