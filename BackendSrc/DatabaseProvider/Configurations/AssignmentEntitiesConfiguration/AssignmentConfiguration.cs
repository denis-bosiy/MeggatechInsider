using Domain.AssignmentEntities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.AssignmentEntitiesConfiguration;

public class AssignmentConfiguration : IEntityTypeConfiguration<Assignment>
{
    public void Configure( EntityTypeBuilder<Assignment> builder )
    {
        builder.ToTable( "Assignment" ).HasKey( x => x.Id );

        builder.Property( x => x.GroupCount ).IsRequired();
        builder.Property( x => x.Year ).IsRequired();
        builder.Property( x => x.ClassNumber ).IsRequired();

        builder.HasOne( x => x.Teacher )
            .WithMany()
            .HasForeignKey( x => x.TeacherId )
            .OnDelete( DeleteBehavior.NoAction );

        builder.HasOne( x => x.Subject )
            .WithMany()
            .HasForeignKey( x => x.SubjectId )
            .OnDelete( DeleteBehavior.NoAction );
    }
}