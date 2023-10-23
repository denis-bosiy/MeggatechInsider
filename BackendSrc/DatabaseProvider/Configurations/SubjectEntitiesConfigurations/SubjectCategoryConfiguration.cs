using Core.Models.SubjectEntities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.SubjectEntitiesConfigurations;

public class SubjectCategoryConfiguration
{
    public void Configure( EntityTypeBuilder<SubjectCategory> builder )
    {
        builder.ToTable( "SubjectCategory" ).HasKey( s => s.Id );

        builder.Property( s => s.Name ).IsRequired().HasMaxLength( 50 );
    }
}