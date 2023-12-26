using Application.Abstractions.EductionalPlan;
using DatabaseProvider.Repositories.Abstractions.SubjectEntities;
using Domain.SubjectEntities;

namespace Application.Implementations.EducationalPlan
{
    internal sealed class SubjectService : ISubjectService
    {
        private readonly ISubjectRepository _subjectRepository;
        private readonly IPaymentTypeRepository _paymentTypeRepository;
        private readonly ISubjectCategoryRepository _subjectCategoryRepository;
        private readonly ISubjectTypeRepository _subjectTypeRepository;

        public SubjectService( 
            ISubjectRepository subjectRepository, 
            IPaymentTypeRepository paymentTypeRepository,
            ISubjectCategoryRepository subjectCategoryRepository,
            ISubjectTypeRepository subjectTypeRepository )
        {
            _subjectRepository = subjectRepository;
            _paymentTypeRepository = paymentTypeRepository;
            _subjectCategoryRepository = subjectCategoryRepository;
            _subjectTypeRepository = subjectTypeRepository;
        }

        public List<Subject> GetSubjectsByYear( int year )
        {
            return _subjectRepository.GetBatchByYear( year );
        }

        public Subject GetSubjectById( int id ) => _subjectRepository.GetById( id );

        public void AddSubject(
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
            bool isFinalExam
        )
        {
            PaymentType paymentType = _paymentTypeRepository.GetPaymentTypeByType( financing );
            SubjectType subjectType = _subjectTypeRepository.GetSubjectTypeByType( type );
            SubjectCategory subjectCategory = _subjectCategoryRepository.GetSubjectCategoryByCategory( category );
            Subject newSubject = new Subject(
                name,
                paymentType.Id,
                subjectType.Id,
                subjectCategory.Id,
                surchargeForNotebooks,
                numberOf10,
                numberOfGroupsIn10,
                numberOf11,
                numberOfGroupsIn11,
                isFinalExam,
                year );

            if ( subjectType is not null && paymentType is not null && subjectCategory is not null )
            { 
                _subjectRepository.Add( newSubject ); 
            }
        }

        public void DeleteSubject( int id ) 
        {
            Subject subject = _subjectRepository.GetById( id );
            _subjectRepository.Remove( subject );
        }

        public void UpdateSubject( 
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
            bool isFinalExam )
        {
            PaymentType paymentType = _paymentTypeRepository.GetPaymentTypeByType( financing );
            SubjectType subjectType = _subjectTypeRepository.GetSubjectTypeByType( type );
            SubjectCategory subjectCategory = _subjectCategoryRepository.GetSubjectCategoryByCategory( category );
            Subject newSubject = new Subject(
                name,
                paymentType.Id,
                subjectType.Id,
                subjectCategory.Id,
                surchargeForNotebooks,
                numberOf10,
                numberOfGroupsIn10,
                numberOf11,
                numberOfGroupsIn11,
                isFinalExam,
                year );

            if ( subjectType is not null && paymentType is not null && subjectCategory is not null )
            {
                _subjectRepository.Update( newSubject );
            }
        }
    }
}
