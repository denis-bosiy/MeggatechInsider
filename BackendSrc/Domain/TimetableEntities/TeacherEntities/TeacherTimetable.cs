using Domain.SubjectEntities;
using Domain.TeacherEntities;
using Domain.TimetableEntities.GuidebookEntities;

namespace Domain.TimetableEntities.TeacherEntities;

public class TeacherTimetable : Entity
{
    public int TeacherId { get; set; }
    public Teacher Teacher { get; set; }
    public int SubjectId { get; set; }
    public Subject Subject { get; set; }
    public int Year { get; set; }
    public int Week { get; set; }
    public DayOfWeek DayOfWeek { get; set; }
    public List<PairTime> AvailableHours { get; set; }

    public TeacherTimetable(
        int teacherId,
        int subjectId,
        int year,
        int week,
        DayOfWeek dayOfWeek )
    {
        TeacherId = teacherId;
        SubjectId = subjectId;
        Year = year;
        Week = week;
        DayOfWeek = dayOfWeek;
    }
}