using Domain.TeacherEntities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.TeacherEntitiesConfigurations;

public class TeacherConfiguration : IEntityTypeConfiguration<Teacher>
{
    public void Configure( EntityTypeBuilder<Teacher> builder )
    {
        builder.ToTable( "Teacher" ).HasKey( t => t.Id );

        builder.Property( t => t.TeacherName ).IsRequired();
        builder.Property( t => t.TeacherCategoryAffectsOnSalary ).IsRequired().HasDefaultValue( false );
        builder.Property( t => t.ContractTypeAffectsOnSalary ).IsRequired().HasDefaultValue( false );
        builder.Property( t => t.IsClassTeacher ).IsRequired().HasDefaultValue( false );
        builder.Property( t => t.AdvancedSubjectsAffectOnSalary ).IsRequired().HasDefaultValue( false );
        builder.Property( t => t.EgeAffectsOnSalary ).IsRequired().HasDefaultValue( false );
        builder.Property( t => t.EmploymentDate ).IsRequired();
        builder.Property( t => t.ExperienceInYearsOnEmploymentDate ).IsRequired().HasDefaultValue( 0 );
        builder.Property( t => t.BirthdayDate ).IsRequired();

        builder.HasOne( t => t.TeacherCategory )
            .WithMany( tc => tc.Teachers )
            .HasForeignKey( t => t.TeacherCategoryId )
            .OnDelete( DeleteBehavior.NoAction );

        builder.HasOne( t => t.ContractType )
            .WithMany( ct => ct.Teachers )
            .HasForeignKey( t => t.ContractTypeId )
            .OnDelete( DeleteBehavior.NoAction );

        builder.HasOne( t => t.Education )
            .WithMany( e => e.Teachers )
            .HasForeignKey( t => t.EducationId )
            .OnDelete( DeleteBehavior.NoAction );
    }
}