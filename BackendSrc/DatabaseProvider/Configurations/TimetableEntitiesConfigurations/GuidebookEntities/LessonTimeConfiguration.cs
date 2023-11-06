using Domain.TimetableEntities.GuidebookEntities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.TimetableEntitiesConfigurations.GuidebookEntities
{
    public class LessonTimeConfiguration : IEntityTypeConfiguration<LessonTime>
    {
        public void Configure( EntityTypeBuilder<LessonTime> builder )
        {
            builder.ToTable( "LessonTime" ).HasKey( lt =>  lt.Id );

            builder.Property( lt => lt.StartTime ).IsRequired();
            builder.Property( lt => lt.EndTime ).IsRequired();
        }
    }
}
