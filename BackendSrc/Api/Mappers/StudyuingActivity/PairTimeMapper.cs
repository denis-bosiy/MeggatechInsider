using Api.Models.StudyingActivityTimeModels.PairTime;
using Domain.TimetableEntities.GuidebookEntities;

namespace Api.Mappers.StudyuingActivity
{
    public static class PairTimeMapper
    {
        public static PairTimeDto MapToDto( this PairTime pairTime )
        {
            return new PairTimeDto
            {
                Id = 0, // idшник к сущности не прикручен, так как сущности справочников почему-то не добавили в бд. можно пренебречь на этапе написания каркаса
                StartTime = pairTime.StartTime,
                EndTime = pairTime.EndTime
            };
        }

        public static List<PairTimeDto> MapToDtos( this IEnumerable<PairTime> pairTimes ) 
        {
            List<PairTimeDto> dtos = new List<PairTimeDto>();

            foreach ( PairTime pairTime in pairTimes )
            {
                dtos.Add( pairTime.MapToDto() );
            }

            return dtos;
        }
    }
}
