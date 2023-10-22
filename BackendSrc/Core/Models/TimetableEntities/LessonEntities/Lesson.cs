namespace Core.Models.TimetableEntities.LessonEntities
{
    public class Lesson : Entity
    {
        public int TypeId { get; set; }
        public TimeOnly StartTime { get; set; }
        public TimeOnly EndTime { get; set; }
        public int StudentGroupId { get; set; }
        public int SubjectId { get; set; }
        public int TeacherId { get; set; }
        public int Classroom { get; set; }
    }
}
