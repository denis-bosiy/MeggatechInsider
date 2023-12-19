using Domain.SubjectEntities;
using Domain.TeacherEntities;

namespace Domain.ReportEntities.SubdeanEntities;

public class YearComment : Entity
{
    public string Text { get; set; }
    public int Year { get; set; }
    public int TeacherId { get; set; }
    public Teacher Teacher { get; set; }
    public int PaymentTypeId { get; set; }
    public PaymentType PaymentType { get; set; }

    public YearComment( string text, int year, int teacherId, int paymentTypeId )
    {
        Text = text;
        Year = year;
        TeacherId = teacherId;
        PaymentTypeId = paymentTypeId;
    }
}