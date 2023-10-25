using Core.Models.SubjectEntities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.SubjectEntitiesConfigurations;

public class SubjectTypeConfiguration : IEntityTypeConfiguration<SubjectType>
{
    public void Configure( EntityTypeBuilder<SubjectType> builder )
    {
        builder.ToTable( "SubjectType" ).HasKey( s => s.Id );

        builder.Property( s => s.Name ).IsRequired().HasMaxLength( 50 );
    }
}