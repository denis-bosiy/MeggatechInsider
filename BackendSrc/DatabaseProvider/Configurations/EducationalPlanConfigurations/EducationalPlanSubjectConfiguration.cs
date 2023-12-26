using Domain.EducationalPlan;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.EducationalPlanConfigurations
{
    public class EducationalPlanSubjectConfiguration : IEntityTypeConfiguration<EducationalPlanSubject>
    {
        public void Configure( EntityTypeBuilder<EducationalPlanSubject> builder )
        {
            builder.ToTable( "EducationalPlanSubject" ).HasKey( s => s.Id );
        }
    }
}
