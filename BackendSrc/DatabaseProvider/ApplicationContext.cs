using DatabaseProvider.Configurations.CourseEntitiesConfigurations.CourseAssignments;
using DatabaseProvider.Configurations.CourseEntitiesConfigurations.CourseEducationalPlans;
using DatabaseProvider.Configurations.CourseEntitiesConfigurations.Courses;
using DatabaseProvider.Configurations.CourseEntitiesConfigurations.CourseTeachers;
using DatabaseProvider.Configurations.CourseEntitiesConfigurations.CourseTimetables;
using DatabaseProvider.Configurations.SubjectEntitiesConfigurations;
using DatabaseProvider.Configurations.TeacherEntitiesConfigurations;
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

        //student groups
        modelBuilder.ApplyConfiguration( new ClassStudentGroupConfiguration() );
        modelBuilder.ApplyConfiguration( new HorizontalSubgroupStudentGroupConfiguration() );
        modelBuilder.ApplyConfiguration( new LiceumStudentGroupConfiguration() );
        modelBuilder.ApplyConfiguration( new ParallelStudentGroupConfiguration() );
        modelBuilder.ApplyConfiguration( new VerticalSubgroupStudentGroupConfiguration() );

        //courses
        modelBuilder.ApplyConfiguration( new CourseAssignmentConfiguration() );
        modelBuilder.ApplyConfiguration( new CourseEducationalPlanHoursConfiguration() );
        modelBuilder.ApplyConfiguration( new CoursesEducationalPlanConfiguration() );
        modelBuilder.ApplyConfiguration( new CourseConfiguration() );
        modelBuilder.ApplyConfiguration( new CourseTypeConfiguration() );
        modelBuilder.ApplyConfiguration( new CourseTeacherAvailableHoursConfiguration() );
        modelBuilder.ApplyConfiguration( new CourseTeacherConfiguration() );
        modelBuilder.ApplyConfiguration( new CourseLessonConfiguration() );
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