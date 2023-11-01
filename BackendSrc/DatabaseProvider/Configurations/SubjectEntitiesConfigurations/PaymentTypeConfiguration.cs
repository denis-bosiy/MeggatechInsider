using Domain.SubjectEntities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.SubjectEntitiesConfigurations;

public class PaymentTypeConfiguration : IEntityTypeConfiguration<PaymentType>
{
    public void Configure( EntityTypeBuilder<PaymentType> builder )
    {
        builder.ToTable( "PaymentType" ).HasKey( b => b.Id );

        builder.Property( b => b.PaymentTypeName ).IsRequired().HasMaxLength( 50 );
    }
}