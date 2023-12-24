using Domain.CourseEntities.CourseTimetables;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.CourseEntitiesConfigurations.CourseTimetables
{
    public class CourseLessonConfiguration : IEntityTypeConfiguration<CourseLesson>
    {
        public void Configure( EntityTypeBuilder<CourseLesson> builder )
        {
            builder.ToTable( "CourseLesson" ).HasKey( l => l.Id );

            builder.Property( l => l.LessonType ).IsRequired();
            builder.Property( l => l.StartTime ).IsRequired();
            builder.Property( l => l.EndTime ).IsRequired();
            builder.Property( l => l.StudentGroupNumber ).IsRequired();
            builder.Property( l => l.StudentGroupType ).IsRequired();
            builder.Property( l => l.Classroom ).IsRequired();

            builder.HasOne( l => l.Course )
                .WithMany( c => c.CourseLessons )
                .HasForeignKey( l => l.CourseId )
                .OnDelete( DeleteBehavior.NoAction );

            builder.HasOne( l => l.CourseTeacher )
                .WithMany( t => t.CourseLessons )
                .HasForeignKey( l => l.CourseTeacherId )
                .OnDelete( DeleteBehavior.NoAction );
        }
    }
}
