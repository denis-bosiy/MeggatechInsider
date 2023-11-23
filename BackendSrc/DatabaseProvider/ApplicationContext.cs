using DatabaseProvider.Configurations.SubjectEntitiesConfigurations;
using DatabaseProvider.Configurations.TeacherEntitiesConfigurations;
using DatabaseProvider.Configurations.TimetableEntitiesConfigurations.GuidebookEntities;
using DatabaseProvider.Configurations.TimetableEntitiesConfigurations.LessonEntities;
using DatabaseProvider.Configurations.TimetableEntitiesConfigurations.StudentGroupEntities;
using Microsoft.EntityFrameworkCore;

namespace DatabaseProvider;

public class ApplicationContext : DbContext
{
    private readonly string? _connectionString;

    public ApplicationContext( DbContextOptions<ApplicationContext> options )
        : base( options )
    {
    }

    public ApplicationContext( string connectionString )
    {
        _connectionString = connectionString;
    }

    protected override void OnModelCreating( ModelBuilder modelBuilder )
    {
        //subjects
        modelBuilder.ApplyConfiguration( new PaymentTypeConfiguration() );
        modelBuilder.ApplyConfiguration( new SubjectCategoryConfiguration() );
        modelBuilder.ApplyConfiguration( new SubjectConfiguration() );
        modelBuilder.ApplyConfiguration( new SubjectTypeConfiguration() );

        //teachers
        modelBuilder.ApplyConfiguration( new ContractTypeConfiguration() );
        modelBuilder.ApplyConfiguration( new EducationConfiguration() );
        modelBuilder.ApplyConfiguration( new TeacherCategoryConfiguration() );
        modelBuilder.ApplyConfiguration( new TeacherConfiguration() );

        //lessons
        modelBuilder.ApplyConfiguration( new LessonConfiguration() );
        modelBuilder.ApplyConfiguration( new LessonTimeConfiguration() );

        //pairs
        modelBuilder.ApplyConfiguration( new PairTimeConfiguration() );

        //parade
        modelBuilder.ApplyConfiguration( new ParadeTimeConfiguration() );

        //student groups
        modelBuilder.ApplyConfiguration( new ClassStudentGroupConfiguration() );
        modelBuilder.ApplyConfiguration( new HorizontalSubgroupStudentGroupConfiguration() );
        modelBuilder.ApplyConfiguration( new LiceumStudentGroupConfiguration() );
        modelBuilder.ApplyConfiguration( new ParallelStudentGroupConfiguration() );
        modelBuilder.ApplyConfiguration( new VerticalSubgroupStudentGroupConfiguration() );
    }

    protected override void OnConfiguring( DbContextOptionsBuilder optionsBuilder )
    {
        if ( String.IsNullOrEmpty( _connectionString ) )
        {
            return;
        }

        optionsBuilder.UseSqlServer( _connectionString );
    }
}