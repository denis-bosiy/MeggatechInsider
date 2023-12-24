using Domain.CourseEntities.CourseEducationalPlans;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.CourseEntitiesConfigurations.CourseEducationalPlans
{
    public class CoursesEducationalPlanConfiguration : IEntityTypeConfiguration<CoursesEducationalPlan>
    {
        public void Configure( EntityTypeBuilder<CoursesEducationalPlan> builder )
        {
            builder.ToTable( "CoursesEducationalPlan" ).HasKey( p => p.Id );

            builder.HasOne( p => p.Course )
                .WithOne( c => c.CourseEducationalPlan )
                .OnDelete( DeleteBehavior.NoAction );
        }
    }
}
