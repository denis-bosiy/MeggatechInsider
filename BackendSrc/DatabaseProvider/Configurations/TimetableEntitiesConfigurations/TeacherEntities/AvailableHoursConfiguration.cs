using Domain.TimetableEntities.TeacherEntities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.TimetableEntitiesConfigurations.TeacherEntities;

public class AvailableHoursConfiguration : IEntityTypeConfiguration<AvailableHours>
{
    public void Configure( EntityTypeBuilder<AvailableHours> builder )
    {
        builder.ToTable( "AvailableHours" ).HasKey( a => a.Id );

        builder.Property( a => a.DayOfWeek ).IsRequired();

        builder.HasOne( a => a.LessonTime )
            .WithMany()
            .HasForeignKey( a => a.LessonTimeId );
    }
}