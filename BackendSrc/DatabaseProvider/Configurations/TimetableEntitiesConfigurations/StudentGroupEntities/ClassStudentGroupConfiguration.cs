using Domain.TimetableEntities.StudentGroupEntities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.TimetableEntitiesConfigurations.StudentGroupEntities;

public class ClassStudentGroupConfiguration : StudentGroupConfiguration<ClassStudentGroup>
{
    public void Configure( EntityTypeBuilder<ClassStudentGroup> builder )
    {
        base.Configure(builder);
        builder.UseTpcMappingStrategy().ToTable( "ClassStudentGroup" );

        builder.Property( csg => csg.Parallel ).HasConversion<int>().IsRequired();
        builder.Property( csg => csg.ClassNumber ).IsRequired();
    }
}