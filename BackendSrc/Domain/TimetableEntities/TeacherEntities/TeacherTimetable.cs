using Domain.SubjectEntities;
using Domain.TeacherEntities;

namespace Domain.TimetableEntities.TeacherEntities;

public class TeacherTimetable : Entity
{
    public int TeacherId { get; set; }
    public Teacher Teacher { get; set; }
    public int SubjectId { get; set; }
    public Subject Subject { get; set; }
    public int Year { get; set; }
    public int Week { get; set; }
    public List<AvailableHours> AvailableHours { get; set; }

    public TeacherTimetable(
        int teacherId,
        int subjectId,
        int year,
        int week )
    {
        TeacherId = teacherId;
        SubjectId = subjectId;
        Year = year;
        Week = week;
    }
}