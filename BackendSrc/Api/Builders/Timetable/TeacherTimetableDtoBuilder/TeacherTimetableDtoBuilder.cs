using Api.Mappers.Timetable;
using Api.Models.TeacherTimetable;
using Domain.AssignmentEntities;
using Domain.TimetableEntities.TeacherEntities;

namespace Api.Builders.Timetable.TeacherTimetableDtoBuilder;

public class TeacherTimetableDtoBuilder : ITeacherTimetableDtoBuilder
{
    private readonly TeacherTimetableDto _teacherTimetableDto = new TeacherTimetableDto();

    public void SetAssignment( Assignment assignment )
    {
        _teacherTimetableDto.Id = assignment.Id;
        _teacherTimetableDto.SubjectName = assignment.Subject.SubjectName;
        _teacherTimetableDto.SubjectId = assignment.SubjectId;
        _teacherTimetableDto.TeacherName = assignment.Teacher.TeacherName;
        _teacherTimetableDto.TeacherId = assignment.TeacherId;
    }

    public void SetAvailableHoursByWeekDay( List<TeacherAvailableHours> teacherAvailableHours ) =>
        _teacherTimetableDto.AvailableHoursByWeekDay = teacherAvailableHours.Map();

    public TeacherTimetableDto GetResult() => _teacherTimetableDto;
}