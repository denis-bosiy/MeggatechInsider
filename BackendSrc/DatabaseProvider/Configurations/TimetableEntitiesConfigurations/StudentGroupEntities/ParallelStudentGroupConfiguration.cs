using Domain.TimetableEntities.StudentGroupEntities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.TimetableEntitiesConfigurations.StudentGroupEntities;

public class ParallelStudentGroupConfiguration : StudentGroupConfiguration<ParallelStudentGroup>
{
    public new void Configure( EntityTypeBuilder<ParallelStudentGroup> builder )
    {
        base.Configure( builder );
        builder.ToTable( "ParallelStudentGroup" );

        builder.Property( sg => sg.Parallel ).HasConversion<int>().IsRequired();
    }
}