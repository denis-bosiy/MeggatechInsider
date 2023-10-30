namespace Domain.SubjectEntities
{
    public class PaymentType : Entity
    {
        public string PaymentTypeName { get; init; }
        
        public List<Subject> Subjects { get; set; } = new();

        public PaymentType( string paymentTypeName )
        {
            PaymentTypeName = paymentTypeName;
        }
    }
}