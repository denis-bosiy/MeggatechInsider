namespace Domain.SubjectEntities
{
    public class PaymentType
    {
        public string PaymentTypeName { get; init; }

        public PaymentType( string paymentTypeName )
        {
            PaymentTypeName = paymentTypeName;
        }
    }
}
