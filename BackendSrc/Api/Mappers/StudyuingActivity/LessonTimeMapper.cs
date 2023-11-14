using Api.Models.StudyingActivityTimeModels.LessonTime;
using Domain.TimetableEntities.GuidebookEntities;

namespace Api.Mappers.StudyuingActivity
{
    public static class LessonTimeMapper
    {
        public static LessonTimeDto MapToDto( this LessonTime lessonTime )
        {
            return new LessonTimeDto
            {
                Id = lessonTime.Id,
                StartTime = lessonTime.StartTime,
                EndTime = lessonTime.EndTime
            };
        }

        public static List<LessonTimeDto> MapToDtos( this IEnumerable<LessonTime> lessonTimes )
        {
            List<LessonTimeDto> dtos = new List<LessonTimeDto>();

            foreach ( LessonTime lessonTime in lessonTimes )
            {
                dtos.Add( lessonTime.MapToDto() );
            }

            return dtos;
        }
    }
}
