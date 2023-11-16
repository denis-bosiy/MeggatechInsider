using Domain.TimetableEntities.GuidebookEntities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.TimetableEntitiesConfigurations.GuidebookEntities
{
    public class ParadeTimeConfiguration : IEntityTypeConfiguration<ParadeTime>
    {
        public void Configure( EntityTypeBuilder<ParadeTime> builder )
        {
            builder.ToTable( "ParadeTime" ).HasKey( pt => pt.Id );

            builder.Property( pt => pt.Year ).IsRequired();
            builder.Property( pt => pt.DayOfWeek ).IsRequired();
            builder.Property( pt => pt.StartTime ).IsRequired();
            builder.Property( pt => pt.EndTime ).IsRequired();
        }
    }
}
