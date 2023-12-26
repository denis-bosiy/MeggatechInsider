using Domain.ReportEntities.SubdeanEntities;

namespace Domain.SubjectEntities
{
    public class PaymentType : Entity
    {
        public string PaymentTypeName { get; set; }

        public List<Subject> Subjects { get; } = new List<Subject>();
        public List<MonthComment> MonthComments { get; } = new List<MonthComment>();
        public List<YearComment> YearComments { get; } = new List<YearComment>();

        public PaymentType( string paymentTypeName )
        {
            PaymentTypeName = paymentTypeName;
        }
    }
}