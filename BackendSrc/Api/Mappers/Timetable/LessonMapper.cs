using Api.Models.Timetable;
using Domain.TimetableEntities.LessonEntities;
using Domain.TimetableEntities.StudentGroupEntities;

namespace Api.Mappers.Timetable
{
    public static class LessonMapper
    {
        public static CellDto MapToCellDto( this Lesson lesson )
        {
            new CellDto
            {
                CellId = lesson.Id,
                WeekDay = lesson.Date.DayOfWeek,
                StartTime = lesson.StartTime,
                EndTime = lesson.EndTime,
                List<ShortClassInfoDto> Class = ,
                NumberOfGroup = ,
                CurrentGroup = ,
                Subject = new SubjectDto
                {
                    SubjectId = lesson.SubjectId,
                    SubjectName = lesson.Subject.SubjectName,
                    TeacherName = lesson.Teacher.TeacherName
                },
                Classroom = lesson.Classroom,
                IsOnline = lesson.Classroom == -1,
                IsParallel = lesson.StudentGroup is LiceumStudentGroup,
                IsClass = lesson.StudentGroup is HorizontalSubgroupStudentGroup || lesson.StudentGroup is ParallelStudentGroup,
                IsGroup = lesson.StudentGroup is VerticalSubgroupStudentGroup
            };
        }

        public static List<CellDto> MapToCellDtos( this IEnumerable<Lesson> lessons )
        {
            List<CellDto> dtos = new List<CellDto>();
            foreach ( Lesson lesson in lessons )
            {
                dtos.Add( lesson.MapToCellDto() );
            }
            return dtos;
        }
    }
}
