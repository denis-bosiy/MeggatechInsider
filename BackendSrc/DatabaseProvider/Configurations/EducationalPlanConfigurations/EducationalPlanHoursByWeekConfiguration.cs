using Domain.EducationalPlan;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.EducationalPlanConfigurations
{
    public class EducationalPlanHoursByWeekConfiguration : IEntityTypeConfiguration<EducationalPlanHoursByWeek>
    {
        public void Configure( EntityTypeBuilder<EducationalPlanHoursByWeek> builder )
        {
            builder.ToTable( "EducationalPlanHoursByWeek" ).HasKey( h => h.Id );

            builder.Property( h => h.WeekStartDate ).IsRequired();
            builder.Property( h => h.HoursCount ).IsRequired();
        }
    }
}
