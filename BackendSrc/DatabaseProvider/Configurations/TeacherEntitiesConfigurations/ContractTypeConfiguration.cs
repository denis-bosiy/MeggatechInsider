using Core.Models.TeacherEntities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.TeacherEntitiesConfigurations;

public class ContractTypeConfiguration
{
    public void Configure( EntityTypeBuilder<ContractType> builder )
    {
        builder.ToTable( "ContractType" ).HasKey( c => c.Id );

        builder.Property( c => c.Name ).IsRequired();
    }
}