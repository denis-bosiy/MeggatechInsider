using Api.Models.EducationalPlan.Subject;
using Domain.SubjectEntities;

namespace Api.Mappers.EducationalPlan
{
    public static class SubjectMapper
    {
        public static SubjectsResponseDto Map( this IEnumerable<Subject> subjects )
        {
            return new SubjectsResponseDto()
            {
                Subjects = subjects.Select( x => x.Map() ).ToList()
            };
        }

        public static SubjectDto Map( this Subject subject )
        {
            return new SubjectDto()
            {
                Id = subject.Id,
                Name = subject.SubjectName,
                PaymentType = subject.PaymentType.PaymentTypeName,
                Type = subject.SubjectType.SubjectTypeName,
                Category = subject.SubjectCategory.SubjectCategoryName,
                NotebooksSurcharge = subject.NotebooksPaymentInPercents,
                TenthCount = subject.ExpectedHoursPerWeekForTenthClasses,
                TenthGroupsCount = subject.ExpectedGroupsCountForTenthClasses,
                EleventhNumber = subject.ExpectedHoursPerWeekForEleventhClasses,
                EleventhGroupsCount = subject.ExpectedGroupsCountForEleventhClasses,
                IsFinalExam = subject.IsEge
            };
        }
    }
}
