using Core.Models.TeacherEntities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.TeacherEntitiesConfigurations;

public class EducationConfiguration : IEntityTypeConfiguration<Education>
{
    public void Configure( EntityTypeBuilder<Education> builder )
    {
        builder.ToTable( "TeacherEducation" ).HasKey( e => e.Id );

        builder.Property( e => e.Name ).IsRequired();
    }
}