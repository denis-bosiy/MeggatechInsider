using Domain.TimetableEntities.StudentGroupEntities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.TimetableEntitiesConfigurations.StudentGroupEntities
{
    public class StudentGroupConfiguration<TEntity> : IEntityTypeConfiguration<TEntity> where TEntity : StudentGroup
    {
        public void Configure( EntityTypeBuilder<TEntity> builder )
        {
            builder.HasKey( x => x.Id );
        }
    }
}