using Microsoft.EntityFrameworkCore;
using Domain.CourseEntities.CourseAssignments;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DatabaseProvider.Configurations.CourseEntitiesConfigurations.CourseAssignments
{
    public class CourseAssignmentConfiguration : IEntityTypeConfiguration<CourseAssignment>
    {
        public void Configure( EntityTypeBuilder<CourseAssignment> builder )
        {
            builder.ToTable( "CourseAssignment" ).HasKey( a => a.Id );

            builder.Property( a => a.GroupCount ).IsRequired();
            builder.Property( a => a.Year ).IsRequired();

            builder.HasOne( a => a.CourseTeacher )
                .WithMany()
                .HasForeignKey( a => a.CourseTeacherId )
                .OnDelete( DeleteBehavior.NoAction );

            builder.HasOne( a => a.Course )
                .WithMany()
                .HasForeignKey( a => a.CourseId )
                .OnDelete( DeleteBehavior.NoAction );
        }
    }
}
