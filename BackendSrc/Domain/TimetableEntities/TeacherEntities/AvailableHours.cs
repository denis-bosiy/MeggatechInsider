using Domain.TimetableEntities.GuidebookEntities;

namespace Domain.TimetableEntities.TeacherEntities;

public class AvailableHours : Entity
{
    public DayOfWeek DayOfWeek { get; set; }
    public int LessonTimeId { get; set; }
    public LessonTime LessonTime { get; set; }
}