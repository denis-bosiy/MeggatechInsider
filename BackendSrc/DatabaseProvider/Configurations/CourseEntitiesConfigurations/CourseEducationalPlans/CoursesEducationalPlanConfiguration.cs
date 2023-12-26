using Domain.CourseEntities.CourseEducationalPlans;
using Domain.CourseEntities.Courses;
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
                .HasForeignKey<CoursesEducationalPlan>( p => p.CourseId )
                .OnDelete( DeleteBehavior.NoAction );
        }
    }
}
