using Domain.TimetableEntities.TeacherEntities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.TimetableEntitiesConfigurations.TeacherEntities;

public class TeacherAvailableHoursConfiguration : IEntityTypeConfiguration<TeacherAvailableHours>
{
    public void Configure( EntityTypeBuilder<TeacherAvailableHours> builder )
    {
        builder.ToTable( "TeacherAvailableHours" ).HasKey( a => a.Id );

        builder.Property( a => a.DayOfWeek ).IsRequired();

        builder.HasOne( a => a.Teacher )
            .WithMany()
            .HasForeignKey( a => a.TeacherId );
        builder.HasMany( a => a.AvailableLessonTimes )
            .WithMany( l => l.TeacherAvailableHours );
        builder.HasMany( a => a.AvailablePairTimes )
            .WithMany( p => p.TeacherAvailableHours );
    }
}