using Domain.CourseEntities.Courses;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.CourseEntitiesConfigurations.Courses
{
    public class CourseConfiguration : IEntityTypeConfiguration<Course>
    {
        public void Configure( EntityTypeBuilder<Course> builder )
        {
            builder.ToTable( "Course" ).HasKey( c => c.Id );

            builder.Property( c => c.CourseName ).IsRequired();
            builder.Property( c => c.ExpectedHoursPerWeek ).IsRequired();
            builder.Property( c => c.ExpectedGroupsCount ).IsRequired();
            builder.Property( c => c.Year ).IsRequired();

            builder.HasOne( c => c.CourseType )
                .WithMany( t => t.Courses )
                .HasForeignKey( c => c.CourseTypeId )
                .OnDelete( DeleteBehavior.NoAction );
        }
    }
}
