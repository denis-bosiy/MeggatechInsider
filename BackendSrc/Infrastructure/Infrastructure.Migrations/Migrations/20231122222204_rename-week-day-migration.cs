using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Migrations.Migrations
{
    /// <inheritdoc />
    public partial class renameweekdaymigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "WeekDay",
                table: "TeacherAvailableHours",
                newName: "DayOfWeek");

            migrationBuilder.RenameColumn(
                name: "StartDate",
                table: "TeacherAvailableHours",
                newName: "WeekStartDate");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "WeekStartDate",
                table: "TeacherAvailableHours",
                newName: "StartDate");

            migrationBuilder.RenameColumn(
                name: "DayOfWeek",
                table: "TeacherAvailableHours",
                newName: "WeekDay");
        }
    }
}
