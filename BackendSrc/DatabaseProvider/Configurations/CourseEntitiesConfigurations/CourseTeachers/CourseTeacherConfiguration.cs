using Domain.CourseEntities.CourceTeachers;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DatabaseProvider.Configurations.CourseEntitiesConfigurations.CourseTeachers
{
    public class CourseTeacherConfiguration : IEntityTypeConfiguration<CourseTeacher>
    {
        public void Configure( EntityTypeBuilder<CourseTeacher> builder )
        {

        }
    }
}
