namespace Domain.SubjectEntities
{
    public class PaymentType : Entity
    {
        public string PaymentTypeName { get; set; }

        public List<Subject> Subjects { get; set; }

        public PaymentType( string paymentTypeName )
        {
            PaymentTypeName = paymentTypeName;
        }
    }
}