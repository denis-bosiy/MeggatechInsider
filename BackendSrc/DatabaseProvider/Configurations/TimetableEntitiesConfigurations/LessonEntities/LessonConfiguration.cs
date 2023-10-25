using Core.Models.TimetableEntities.LessonEntities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.TimetableEntitiesConfigurations.LessonEntities;

public class LessonConfiguration : IEntityTypeConfiguration<Lesson>
{
    public void Configure( EntityTypeBuilder<Lesson> builder )
    {
        builder.ToTable( "Lesson" ).HasKey( l => l.Id );

        builder.Property( l => l.StartTime ).IsRequired();
        builder.Property( l => l.EndTime ).IsRequired();
        builder.Property( l => l.Classroom ).IsRequired();

        builder.HasOne( l => l.Subject )
            .WithMany( s => s.Lessons )
            .HasForeignKey( l => l.SubjectId )
            .OnDelete( DeleteBehavior.NoAction );

        builder.Property( l => l.LessonType ).HasConversion<int>();

        builder.HasOne( l => l.StudentGroup )
            .WithMany( sg => sg.Lessons )
            .HasForeignKey( l => l.StudentGroupId )
            .OnDelete( DeleteBehavior.NoAction );

        builder.HasOne( l => l.Teacher )
            .WithMany( t => t.Lessons )
            .HasForeignKey( l => l.TeacherId )
            .OnDelete( DeleteBehavior.NoAction );
    }
}