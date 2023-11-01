using Domain.TimetableEntities.StudentGroupEntities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.TimetableEntitiesConfigurations.StudentGroupEntities;

public class ParallelStudentGroupConfiguration : IEntityTypeConfiguration<ParallelStudentGroup>
{
    public void Configure( EntityTypeBuilder<ParallelStudentGroup> builder )
    {
        builder.ToTable( "ParallelStudentGroup" ).HasKey( sg => sg.Id );

        builder.Property( sg => sg.Parallel ).HasConversion<int>().IsRequired();
    }
}