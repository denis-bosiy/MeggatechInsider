using Api.Models.TeacherTimetable;
using Domain.AssignmentEntities;
using Domain.TimetableEntities.TeacherEntities;

namespace Api.Builders.Timetable.TeacherTimetableDtoBuilder;

public interface ITeacherTimetableDtoBuilder
{
    void SetAssignment( Assignment assignment );
    void SetAvailableHoursByWeekDay( List<TeacherAvailableHours> teacherAvailableHours );
    TeacherTimetableDto GetResult();
}