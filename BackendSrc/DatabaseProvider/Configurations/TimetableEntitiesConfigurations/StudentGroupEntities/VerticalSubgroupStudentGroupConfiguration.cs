using Domain.TimetableEntities.StudentGroupEntities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.TimetableEntitiesConfigurations.StudentGroupEntities;

public class VerticalSubgroupStudentGroupConfiguration : IEntityTypeConfiguration<VerticalSubgroupStudentGroup>
{
    public void Configure( EntityTypeBuilder<VerticalSubgroupStudentGroup> builder )
    {
        builder.ToTable( "VerticalSubgroupStudentGroup" ).HasKey( sg => sg.Id );

        builder.Property( sg => sg.Parallel ).HasConversion<int>().IsRequired();
        builder.Property( sg => sg.ClassNumber ).IsRequired();
        builder.Property( sg => sg.SubgroupNumber ).IsRequired();
    }
}