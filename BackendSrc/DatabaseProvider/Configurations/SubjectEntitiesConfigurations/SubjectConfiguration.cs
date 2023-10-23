using Core.Models.SubjectEntities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.SubjectEntitiesConfigurations;

public class SubjectConfiguration
{
    public void Configure( EntityTypeBuilder<Subject> builder )
    {
        builder.ToTable( "Subject" ).HasKey( s => s.Id );

        builder.Property( s => s.Name )
            .IsRequired()
            .HasMaxLength( 128 );

        builder.Property( s => s.NotebooksPaymentInPercents ).IsRequired();
        builder.Property( s => s.ExpectedHoursPerWeekForTenthClasses ).IsRequired();
        builder.Property( s => s.ExpectedGroupsCountForTenthClasses ).IsRequired();
        builder.Property( s => s.ExpectedHoursPerWeekForEleventhClasses ).IsRequired();
        builder.Property( s => s.IsEge ).IsRequired();

        builder.HasOne( s => s.PaymentType )
            .WithMany( p => p.Subjects )
            .HasForeignKey( s => s.PaymentTypeId )
            .OnDelete( DeleteBehavior.NoAction );

        builder.HasOne( s => s.Category )
            .WithMany( c => c.Subjects )
            .HasForeignKey( s => s.CategoryId )
            .OnDelete( DeleteBehavior.NoAction );

        builder.HasOne( s => s.Type )
            .WithMany( t => t.Subjects )
            .HasForeignKey( s => s.TypeId )
            .OnDelete( DeleteBehavior.NoAction );
    }
}