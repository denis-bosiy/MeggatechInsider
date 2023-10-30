namespace Domain.SubjectEntities
{
    public class SubjectType : Entity
    {
        public string SubjectTypeName { get; init; }

        public List<Subject> Subjects { get; set; } = new();

        public SubjectType( string subjectTypeName )
        {
            SubjectTypeName = subjectTypeName;
        }
    }
}