using Domain.SubjectEntities;
using Domain.TeacherEntities;

namespace Domain.ReportEntities.SubdeanEntities;

public class MonthComment : Entity
{
    public string Text { get; set; }
    public int Year { get; set; }
    public int Month { get; set; }
    public int TeacherId { get; set; }
    public Teacher Teacher { get; set; }
    public int PaymentTypeId { get; set; }
    public PaymentType PaymentType { get; set; }

    public MonthComment( string text, int year, int month, int teacherId, int paymentTypeId )
    {
        Text = text;
        Year = year;
        Month = month;
        TeacherId = teacherId;
        PaymentTypeId = paymentTypeId;
    }
}