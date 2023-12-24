using Domain.CourseEntities.Courses;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.CourseEntitiesConfigurations.Courses
{
    public class CourseTypeConfiguration : IEntityTypeConfiguration<CourseType>
    {
        public void Configure( EntityTypeBuilder<CourseType> builder )
        {
            builder.ToTable( "CourseType" ).HasKey( t => t.Id );

            builder.Property( t => t.CourseTypeName ).IsRequired();
        }
    }
}
