using Domain.TimetableEntities.GuidebookEntities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.TimetableEntitiesConfigurations.GuidebookEntities
{
    public class PairTimeConfiguration : IEntityTypeConfiguration<PairTime>
    {
        public void Configure( EntityTypeBuilder<PairTime> builder )
        {
            builder.ToTable( "PairTime" ).HasKey( pt => pt.Id );

            builder.Property( pt => pt.Year ).IsRequired();
            builder.Property( pt => pt.StartTime ).IsRequired();
            builder.Property( pt => pt.EndTime ).IsRequired();
        }
    }
}