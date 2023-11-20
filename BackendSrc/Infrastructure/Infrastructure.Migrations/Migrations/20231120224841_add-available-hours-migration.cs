using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Migrations.Migrations
{
    /// <inheritdoc />
    public partial class addavailablehoursmigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "LessonTime",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Year = table.Column<int>(type: "int", nullable: false),
                    StartTime = table.Column<TimeOnly>(type: "time", nullable: false),
                    EndTime = table.Column<TimeOnly>(type: "time", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LessonTime", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PairTime",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Year = table.Column<int>(type: "int", nullable: false),
                    StartTime = table.Column<TimeOnly>(type: "time", nullable: false),
                    EndTime = table.Column<TimeOnly>(type: "time", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PairTime", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ParadeTime",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Year = table.Column<int>(type: "int", nullable: false),
                    DayOfWeek = table.Column<int>(type: "int", nullable: false),
                    StartTime = table.Column<TimeOnly>(type: "time", nullable: false),
                    EndTime = table.Column<TimeOnly>(type: "time", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ParadeTime", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TeacherTimetable",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TeacherId = table.Column<int>(type: "int", nullable: false),
                    SubjectId = table.Column<int>(type: "int", nullable: false),
                    Year = table.Column<int>(type: "int", nullable: false),
                    Week = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TeacherTimetable", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TeacherTimetable_Subject_SubjectId",
                        column: x => x.SubjectId,
                        principalTable: "Subject",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TeacherTimetable_Teacher_TeacherId",
                        column: x => x.TeacherId,
                        principalTable: "Teacher",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AvailableHours",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DayOfWeek = table.Column<int>(type: "int", nullable: false),
                    LessonTimeId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AvailableHours", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AvailableHours_LessonTime_LessonTimeId",
                        column: x => x.LessonTimeId,
                        principalTable: "LessonTime",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AvailableHoursTeacherTimetable",
                columns: table => new
                {
                    AvailableHoursId = table.Column<int>(type: "int", nullable: false),
                    TeacherTimetableId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AvailableHoursTeacherTimetable", x => new { x.AvailableHoursId, x.TeacherTimetableId });
                    table.ForeignKey(
                        name: "FK_AvailableHoursTeacherTimetable_AvailableHours_AvailableHoursId",
                        column: x => x.AvailableHoursId,
                        principalTable: "AvailableHours",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AvailableHoursTeacherTimetable_TeacherTimetable_TeacherTimetableId",
                        column: x => x.TeacherTimetableId,
                        principalTable: "TeacherTimetable",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AvailableHours_LessonTimeId",
                table: "AvailableHours",
                column: "LessonTimeId");

            migrationBuilder.CreateIndex(
                name: "IX_AvailableHoursTeacherTimetable_TeacherTimetableId",
                table: "AvailableHoursTeacherTimetable",
                column: "TeacherTimetableId");

            migrationBuilder.CreateIndex(
                name: "IX_TeacherTimetable_SubjectId",
                table: "TeacherTimetable",
                column: "SubjectId");

            migrationBuilder.CreateIndex(
                name: "IX_TeacherTimetable_TeacherId",
                table: "TeacherTimetable",
                column: "TeacherId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AvailableHoursTeacherTimetable");

            migrationBuilder.DropTable(
                name: "PairTime");

            migrationBuilder.DropTable(
                name: "ParadeTime");

            migrationBuilder.DropTable(
                name: "AvailableHours");

            migrationBuilder.DropTable(
                name: "TeacherTimetable");

            migrationBuilder.DropTable(
                name: "LessonTime");
        }
    }
}
