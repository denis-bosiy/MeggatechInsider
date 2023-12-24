using Domain.CourseEntities.CourseEducationalPlans;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.CourseEntitiesConfigurations.CourseEducationalPlans
{
    public class CourseEducationalPlanHoursConfiguration : IEntityTypeConfiguration<CoursesEducationalPlanHours>
    {
        public void Configure( EntityTypeBuilder<CoursesEducationalPlanHours> builder )
        {
            builder.ToTable( "CoursesEducationalPlanHours" ).HasKey( h => h.Id );

            builder.Property( h => h.WeekStartDate );
            builder.Property( h => h.HoursCount );

            builder.HasOne( h => h.CoursesEducationalPlan )
                .WithMany( p => p.CoursesEducationalPlanHours )
                .HasForeignKey( h => h.CoursesEducationalPlanId )
                .OnDelete( DeleteBehavior.NoAction );        
        }
    }
}
