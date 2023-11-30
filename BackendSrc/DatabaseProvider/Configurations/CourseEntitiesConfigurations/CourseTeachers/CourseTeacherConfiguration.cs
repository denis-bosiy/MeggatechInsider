using Domain.CourseEntities.CourceTeachers;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.CourseEntitiesConfigurations.CourseTeachers
{
    public class CourseTeacherConfiguration : IEntityTypeConfiguration<CourseTeacher>
    {
        public void Configure( EntityTypeBuilder<CourseTeacher> builder )
        {
            builder.ToTable( "CourseTeacher" ).HasKey( t => t.Id );

            builder.Property( t => t.CourseTeacherName ).IsRequired();
            builder.Property( t => t.EmploymentDate ).IsRequired();
            builder.Property( t => t.ExperienceInYearsOnEmploymentDate ).IsRequired().HasDefaultValue( 0 );
            builder.Property( t => t.BirthdayDate ).IsRequired();
            builder.Property( t => t.Year ).IsRequired();

            builder.HasOne( t => t.ContractType )
                .WithMany( ct => ct.CourseTeachers )
                .HasForeignKey( t => t.ContractTypeId )
                .OnDelete( DeleteBehavior.NoAction );
        }
    }
}
