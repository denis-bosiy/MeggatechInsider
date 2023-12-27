using Domain.EducationalPlan;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.EducationalPlanConfigurations
{
    public class EducationalPlanConfiguration : IEntityTypeConfiguration<EducationalPlan>
    {
        public void Configure( EntityTypeBuilder<EducationalPlan> builder )
        {
            builder.ToTable( "EducationalPlan" ).HasKey( p => p.Id );

            builder.Property( e => e.ClassNumber ).IsRequired();
            builder.Property( e => e.Year ).IsRequired();
        }
    }
}
