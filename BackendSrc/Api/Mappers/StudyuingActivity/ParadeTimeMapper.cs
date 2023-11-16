using Api.Models.StudyingActivityTimeModels.ParadeTime;
using Domain.TimetableEntities.GuidebookEntities;

namespace Api.Mappers.StudyuingActivity
{
    public static class ParadeTimeMapper
    {
        public static ParadeTimeDto MapToDto( this ParadeTime paradeTime )
        {
            return new ParadeTimeDto
            {
                WeekDay = paradeTime.DayOfWeek,
                StartTime = paradeTime.StartTime,
                EndTime = paradeTime.EndTime
            };
        }
    }
}
