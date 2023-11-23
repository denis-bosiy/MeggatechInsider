using Domain.TimetableEntities.StudentGroupEntities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.TimetableEntitiesConfigurations.StudentGroupEntities;

public class LiceumStudentGroupConfiguration : StudentGroupConfiguration<LiceumStudentGroup>
{
    public new void Configure( EntityTypeBuilder<LiceumStudentGroup> builder )
    {
        base.Configure( builder );
        builder.ToTable( "LiceumStudentGroup" );
    }
}