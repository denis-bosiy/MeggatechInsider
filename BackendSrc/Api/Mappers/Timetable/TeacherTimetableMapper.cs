using Api.Models.TeacherTimetable;
using Domain.TimetableEntities.TeacherEntities;

namespace Api.Mappers.Timetable;

public static class TeacherTimetableMapper
{
    private static TeacherTimetableDto Map( this TeacherTimetable teacherTimetable ) =>
        new TeacherTimetableDto()
        {
            Id = teacherTimetable.Id,
            SubjectId = teacherTimetable.SubjectId,
            SubjectName = teacherTimetable.Subject.SubjectName,
            TeacherId = teacherTimetable.TeacherId,
            TeacherName = teacherTimetable.Teacher.TeacherName,
            AvailableHours = teacherTimetable.AvailableHours.Map()
            // TODO: реализовать оставшиеся поля
        };

    public static List<TeacherTimetableDto> Map( this List<TeacherTimetable> teacherTimetables ) =>
        teacherTimetables.Select( Map ).ToList();
}