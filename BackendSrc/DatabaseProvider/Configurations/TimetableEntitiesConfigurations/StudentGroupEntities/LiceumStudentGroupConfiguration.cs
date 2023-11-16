using Domain.TimetableEntities.StudentGroupEntities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.TimetableEntitiesConfigurations.StudentGroupEntities;

public class LiceumStudentGroupConfiguration : IEntityTypeConfiguration<LiceumStudentGroup>
{
    public void Configure( EntityTypeBuilder<LiceumStudentGroup> builder )
    {
        builder.ToTable( "LiceumStudentGroup" );
    }
}