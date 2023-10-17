namespace Domain.SubjectEntities
{
    public class Subject
    {
        public string Name { get; init; }
        public PaymentType PaymentType { get; init; }
        public SubjectType SubjectType { get; init; }
        public SubjectCategory SubjectCategory { get; init; }
        public int NotebooksPaymentInPercents { get; init; }
        public int ExpectedHoursPerWeekForTenthClasses {  get; init; }
        public int ExpectedGroupsCountForTenthClasses { get; init; }
        public int ExpectedHoursPerWeekForEleventhClasses { get; init; }
        public int IsEge { get; init; }

        public Subject( 
            string name, 
            PaymentType paymentType, 
            SubjectType subjectType, 
            SubjectCategory subjectCategory, 
            int notebooksPaymentInPercents, 
            int expectedHoursPerWeekForTenthClasses, 
            int expectedGroupsCountForTenthClasses, 
            int expectedHoursPerWeekForEleventhClasses, 
            int isEge )
        {
            Name = name;
            PaymentType = paymentType;
            SubjectType = subjectType;
            SubjectCategory = subjectCategory;
            NotebooksPaymentInPercents = notebooksPaymentInPercents;
            ExpectedHoursPerWeekForTenthClasses = expectedHoursPerWeekForTenthClasses;
            ExpectedGroupsCountForTenthClasses = expectedGroupsCountForTenthClasses;
            ExpectedHoursPerWeekForEleventhClasses = expectedHoursPerWeekForEleventhClasses;
            IsEge = isEge;
        }
    }
}
