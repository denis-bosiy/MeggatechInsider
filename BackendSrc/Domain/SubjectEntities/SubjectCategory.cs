namespace Domain.SubjectEntities
{
    public class SubjectCategory : Entity
    {
        public string SubjectCategoryName { get; set; }

        public List<Subject> Subjects { get; set; } = new();

        public SubjectCategory( string subjectCategoryName )
        {
            SubjectCategoryName = subjectCategoryName;
        }
    }
}