namespace Domain.SubjectEntities
{
    public class SubjectCategory
    {
        public string SubjectCategoryName { get; init; }

        public SubjectCategory( string subjectCategoryName )
        {
            SubjectCategoryName = subjectCategoryName;
        }
    }
}
