using Domain.TimetableEntities.LessonEntities;

namespace Domain.SubjectEntities
{
    public class Subject : Entity
    {
        public string SubjectName { get; set; }
        public int PaymentTypeId { get; set; }
        public PaymentType PaymentType { get; set; }
        public int SubjectTypeId { get; set; }
        public SubjectType SubjectType { get; set; }
        public int SubjectCategoryId { get; set; }
        public SubjectCategory SubjectCategory { get; set; }
        public int NotebooksPaymentInPercents { get; set; }
        public int ExpectedHoursPerWeekForTenthClasses { get; set; }
        public int ExpectedGroupsCountForTenthClasses { get; set; }
        public int ExpectedHoursPerWeekForEleventhClasses { get; set; }
        public int ExpectedGroupsCountForEleventhClasses { get; set; }
        public bool IsEge { get; set; }
        public int Year { get; set; }

        public List<Lesson> Lessons { get; set; }

        public Subject(
            string subjectName,
            int paymentTypeId,
            int subjectTypeId,
            int subjectCategoryId,
            int notebooksPaymentInPercents,
            int expectedHoursPerWeekForTenthClasses,
            int expectedGroupsCountForTenthClasses,
            int expectedHoursPerWeekForEleventhClasses,
            int expectedGroupsCountForEleventhClasses,
            bool isEge,
            int year
        )
        {
            SubjectName = subjectName;
            NotebooksPaymentInPercents = notebooksPaymentInPercents;
            ExpectedHoursPerWeekForTenthClasses = expectedHoursPerWeekForTenthClasses;
            ExpectedGroupsCountForTenthClasses = expectedGroupsCountForTenthClasses;
            ExpectedHoursPerWeekForEleventhClasses = expectedHoursPerWeekForEleventhClasses;
            ExpectedGroupsCountForEleventhClasses = expectedGroupsCountForEleventhClasses;
            IsEge = isEge;
            Year = year;
            PaymentTypeId = paymentTypeId;
            SubjectTypeId = subjectTypeId;
            SubjectCategoryId = subjectCategoryId;
        }
    }
}