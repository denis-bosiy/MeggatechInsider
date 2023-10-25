using Core.Models.TimetableEntities.StudentGroupEntities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.TimetableEntitiesConfigurations.StudentGroupEntities;

public class ClassStudentGroupConfiguration : IEntityTypeConfiguration<ClassStudentGroup>
{
    public void Configure( EntityTypeBuilder<ClassStudentGroup> builder )
    {
        builder.ToTable( "ClassStudentGroup" ).HasKey( csg => csg.Id );

        builder.Property( csg => csg.Parallel ).HasConversion<int>().IsRequired();
        builder.Property( csg => csg.ClassNumber ).IsRequired();
    }
}