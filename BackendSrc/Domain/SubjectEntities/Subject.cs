using Domain.TimetableEntities.LessonEntities;

namespace Domain.SubjectEntities
{
    public class Subject : Entity
    {
        public string SubjectName { get; init; }
        public int PaymentTypeId { get; init; }
        public PaymentType PaymentType { get; init; }
        public int SubjectTypeId { get; init; }
        public SubjectType SubjectType { get; init; }
        public int SubjectCategoryId { get; init; }
        public SubjectCategory SubjectCategory { get; init; }
        public int NotebooksPaymentInPercents { get; init; }
        public int ExpectedHoursPerWeekForTenthClasses { get; init; }
        public int ExpectedGroupsCountForTenthClasses { get; init; }
        public int ExpectedHoursPerWeekForEleventhClasses { get; init; }
        public int IsEge { get; init; }

        public List<Lesson> Lessons { get; set; }

        public Subject(
            string subjectName,
            int paymentTypeId,
            PaymentType paymentType,
            int subjectTypeId,
            SubjectType subjectType,
            int subjectCategoryId,
            SubjectCategory subjectCategory,
            int notebooksPaymentInPercents,
            int expectedHoursPerWeekForTenthClasses,
            int expectedGroupsCountForTenthClasses,
            int expectedHoursPerWeekForEleventhClasses,
            int isEge
        )
        {
            SubjectName = subjectName;
            PaymentType = paymentType;
            SubjectType = subjectType;
            SubjectCategory = subjectCategory;
            NotebooksPaymentInPercents = notebooksPaymentInPercents;
            ExpectedHoursPerWeekForTenthClasses = expectedHoursPerWeekForTenthClasses;
            ExpectedGroupsCountForTenthClasses = expectedGroupsCountForTenthClasses;
            ExpectedHoursPerWeekForEleventhClasses = expectedHoursPerWeekForEleventhClasses;
            IsEge = isEge;
            PaymentTypeId = paymentTypeId;
            SubjectTypeId = subjectTypeId;
            SubjectCategoryId = subjectCategoryId;
        }
    }
}