namespace Domain.SubjectEntities
{
    public class SubjectType
    {
        public string SubjectTypeName { get; init; }

        public SubjectType( string subjectTypeName )
        {
            SubjectTypeName = subjectTypeName;
        }
    }
}