namespace Domain.SubjectEntities
{
    public class SubjectType : Entity
    {
        public string SubjectTypeName { get; set; }

        public List<Subject> Subjects { get; } = new List<Subject>();

        public SubjectType( string subjectTypeName )
        {
            SubjectTypeName = subjectTypeName;
        }
    }
}