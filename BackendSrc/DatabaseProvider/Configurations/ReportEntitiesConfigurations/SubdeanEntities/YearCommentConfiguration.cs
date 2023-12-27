using Domain.ReportEntities.SubdeanEntities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.ReportEntitiesConfigurations.SubdeanEntities
{
    public class YearCommentConfiguration : IEntityTypeConfiguration<YearComment>
    {
        public void Configure( EntityTypeBuilder<YearComment> builder )
        {
            builder.ToTable( "YearComment" ).HasKey( c => c.Id );

            builder.Property( c => c.Year ).IsRequired();
            builder.Property( c => c.Text ).IsRequired();

            builder.HasOne( c => c.Teacher )
                .WithMany( t => t.YearComments )
                .HasForeignKey( c => c.TeacherId )
                .OnDelete( DeleteBehavior.NoAction );

            builder.HasOne( c => c.PaymentType )
                .WithMany( t => t.YearComments )
                .HasForeignKey( c => c.TeacherId )
                .OnDelete( DeleteBehavior.NoAction );
        }
    }
}
