using Core.Models.TeacherEntities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.TeacherEntitiesConfigurations;

public class TeacherCategoryConfiguration : IEntityTypeConfiguration<TeacherCategory>
{
    public void Configure( EntityTypeBuilder<TeacherCategory> builder )
    {
        builder.ToTable( "TeacherCategory" ).HasKey( tc => tc.Id );

        builder.Property( tc => tc.Name );
    }
}