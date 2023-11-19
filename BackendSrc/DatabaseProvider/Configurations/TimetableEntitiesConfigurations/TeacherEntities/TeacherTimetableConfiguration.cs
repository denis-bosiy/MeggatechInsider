using Domain.SubjectEntities;
using Domain.TeacherEntities;
using Domain.TimetableEntities.TeacherEntities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.TimetableEntitiesConfigurations.TeacherEntities;

public class TeacherTimetableConfiguration : IEntityTypeConfiguration<TeacherTimetable>
{
    public void Configure( EntityTypeBuilder<TeacherTimetable> builder )
    {
        builder.ToTable( "TeacherTimetable" ).HasKey( t => t.Id );

        builder.Property( t => t.Year ).IsRequired();
        builder.Property( t => t.Week ).IsRequired();
        builder.Property( t => t.DayOfWeek ).IsRequired();

        builder.HasMany( t => t.AvailableHours ).WithMany();

        builder.HasOne<Subject>().WithMany().HasForeignKey( t => t.SubjectId );
        builder.HasOne<Teacher>().WithMany().HasForeignKey( t => t.TeacherId );
    }
}