namespace Domain.SubjectEntities
{
    public class SubjectCategory : Entity
    {
        public string SubjectCategoryName { get; set; }

        public List<Subject> Subjects { get; } = new List<Subject>();

        public SubjectCategory( string subjectCategoryName )
        {
            SubjectCategoryName = subjectCategoryName;
        }
    }
}