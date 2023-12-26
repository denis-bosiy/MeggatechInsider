using Domain.SubjectEntities;

namespace Application.Abstractions.EductionalPlan
{
    public interface ISubjectService
    {
        List<Subject> GetSubjectsByYear( int year );

        Subject GetSubjectById( int id );

        void AddSubject(
            int year,
            int id,
            string name,
            string financing,
            string type,
            string category,
            int surchargeForNotebooks,
            int numberOf10,
            int numberOfGroupsIn10,
            int numberOf11,
            int numberOfGroupsIn11,
            bool isFinalExam );

        void DeleteSubject( int id );

        void UpdateSubject(
            int year,
            int id,
            string name,
            string financing,
            string type,
            string category,
            int surchargeForNotebooks,
            int numberOf10,
            int numberOfGroupsIn10,
            int numberOf11,
            int numberOfGroupsIn11,
            bool isFinalExam );
    }
}
