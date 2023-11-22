using Domain.TimetableEntities.TeacherEntities;

namespace Domain.TimetableEntities.GuidebookEntities
{
    public class LessonTime : Entity
    {
        public int Year { get; set; }
        public TimeOnly StartTime { get; set; }
        public TimeOnly EndTime { get; set; }

        public List<TeacherAvailableHours> TeacherAvailableHours { get; } = new List<TeacherAvailableHours>();

        public LessonTime( int year, TimeOnly startTime, TimeOnly endTime )
        {
            Year = year;
            StartTime = startTime;
            EndTime = endTime;
        }
    }
}