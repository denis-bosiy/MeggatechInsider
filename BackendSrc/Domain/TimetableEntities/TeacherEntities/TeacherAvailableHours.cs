using Domain.TeacherEntities;
using Domain.TimetableEntities.GuidebookEntities;

namespace Domain.TimetableEntities.TeacherEntities;

public class TeacherAvailableHours : Entity
{
    public int TeacherId { get; set; }
    public Teacher Teacher { get; set; }
    public DayOfWeek DayOfWeek { get; set; }
    public List<PairTime> AvailablePairTimes { get; set; } = new List<PairTime>();
    public List<LessonTime> AvailableLessonTimes { get; set; } = new List<LessonTime>();
    public DateOnly WeekStartDate { get; set; }
}