using Domain.ReportEntities.SubdeanEntities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.ReportEntitiesConfigurations.SubdeanEntities
{
    public class MonthCommentConfiguration : IEntityTypeConfiguration<MonthComment>
    {
        public void Configure( EntityTypeBuilder<MonthComment> builder )
        {
            builder.ToTable( "MonthComment" ).HasKey( c => c.Id );

            builder.Property( c => c.Text );
            builder.Property( c => c.Year );
            builder.Property( c => c.Month );

            builder.HasOne( c => c.Teacher )
                .WithMany( t => t.MonthComments )
                .HasForeignKey( c => c.TeacherId )
                .OnDelete( DeleteBehavior.NoAction );

            builder.HasOne( c => c.PaymentType )
                .WithMany( t => t.MonthComments )
                .HasForeignKey( c => c.PaymentTypeId )
                .OnDelete( DeleteBehavior.NoAction );
        }
    }
}
