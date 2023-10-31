namespace Domain.SubjectEntities
{
    public class SubjectType : Entity
    {
        public string SubjectTypeName { get; set; }

        public List<Subject> Subjects { get; set; } = new();

        public SubjectType( string subjectTypeName )
        {
            SubjectTypeName = subjectTypeName;
        }
    }
}