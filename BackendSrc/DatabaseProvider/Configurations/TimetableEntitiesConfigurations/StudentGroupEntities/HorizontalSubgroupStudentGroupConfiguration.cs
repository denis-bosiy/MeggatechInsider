using Domain.TimetableEntities.StudentGroupEntities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.TimetableEntitiesConfigurations.StudentGroupEntities;

public class HorizontalSubgroupStudentGroupConfiguration : StudentGroupConfiguration<HorizontalSubgroupStudentGroup>
{
    public new void Configure( EntityTypeBuilder<HorizontalSubgroupStudentGroup> builder )
    {
        base.Configure( builder );
        builder.ToTable( "HorizontalSubgroupStudentGroup" );

        builder.Property( sg => sg.Parallel ).HasConversion<int>().IsRequired();
        builder.Property( sg => sg.SubgroupNumber ).IsRequired();
    }
}