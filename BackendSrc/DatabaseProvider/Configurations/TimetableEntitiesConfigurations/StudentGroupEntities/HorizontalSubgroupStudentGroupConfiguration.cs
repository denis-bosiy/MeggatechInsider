using Core.Models.TimetableEntities.StudentGroupEntities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.TimetableEntitiesConfigurations.StudentGroupEntities;

public class HorizontalSubgroupStudentGroupConfiguration : IEntityTypeConfiguration<HorizontalSubgroupStudentGroup>
{
    public void Configure( EntityTypeBuilder<HorizontalSubgroupStudentGroup> builder )
    {
        builder.ToTable( "HorizontalSubgroupStudentGroup" ).HasKey( sg => sg.Id );

        builder.Property( sg => sg.Parallel ).HasConversion<int>().IsRequired();
        builder.Property( sg => sg.SubgroupNumber ).IsRequired();
    }
}