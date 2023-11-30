using Domain.CourseEntities.CourceTeachers;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.CourseEntitiesConfigurations.CourseTeachers
{
    public class CourseTeacherAvailableHoursConfiguration : IEntityTypeConfiguration<CourseTeacherAvailableHours>
    {
        public void Configure( EntityTypeBuilder<CourseTeacherAvailableHours> builder )
        {
            builder.ToTable( "CourseTeacherAvailableHours" ).HasKey( h => h.Id );

            builder.Property( h => h.DayOfWeek );

            builder.HasOne( h => h.CourseTeacher )
                .WithMany( t => t.AvailableHours )
                .HasForeignKey( h => h.CourseTeacherId )
                .OnDelete( DeleteBehavior.NoAction );
        }
    }
}
