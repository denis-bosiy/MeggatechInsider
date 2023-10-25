using Core.Models.SubjectEntities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.SubjectEntitiesConfigurations;

public class PaymentTypeConfiguration : IEntityTypeConfiguration<PaymentType>
{
    public void Configure( EntityTypeBuilder<PaymentType> builder )
    {
        builder.ToTable( "PaymentType" ).HasKey( b => b.Id );

        builder.Property( b => b.Name ).IsRequired().HasMaxLength( 50 );
    }
}