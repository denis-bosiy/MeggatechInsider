using Core.Models.TimetableEntities.LessonEntities;

namespace Core.Models.SubjectEntities;

public class Subject : Entity
{
    public string Name { get; set; }
    public int PaymentTypeId { get; set; }
    public PaymentType PaymentType { get; set; }
    public int TypeId { get; set; }
    public SubjectType Type { get; set; }
    public int CategoryId { get; set; }
    public SubjectCategory Category { get; set; }
    public int NotebooksPaymentInPercents { get; set; }
    public int ExpectedHoursPerWeekForTenthClasses { get; set; }
    public int ExpectedGroupsCountForTenthClasses { get; set; }
    public int ExpectedHoursPerWeekForEleventhClasses { get; set; }
    public int IsEge { get; set; }

    public List<Lesson> Lessons { get; set; }
}