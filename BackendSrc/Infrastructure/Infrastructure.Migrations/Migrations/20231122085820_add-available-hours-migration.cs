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
                name: "Assignment",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TeacherId = table.Column<int>(type: "int", nullable: false),
                    SubjectId = table.Column<int>(type: "int", nullable: false),
                    GroupCount = table.Column<int>(type: "int", nullable: false),
                    Year = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Assignment", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Assignment_Subject_SubjectId",
                        column: x => x.SubjectId,
                        principalTable: "Subject",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Assignment_Teacher_TeacherId",
                        column: x => x.TeacherId,
                        principalTable: "Teacher",
                        principalColumn: "Id");
                });

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
                name: "TeacherAvailableHours",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TeacherId = table.Column<int>(type: "int", nullable: false),
                    WeekDay = table.Column<int>(type: "int", nullable: false),
                    StartDate = table.Column<DateOnly>(type: "date", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TeacherAvailableHours", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TeacherAvailableHours_Teacher_TeacherId",
                        column: x => x.TeacherId,
                        principalTable: "Teacher",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LessonTimeTeacherAvailableHours",
                columns: table => new
                {
                    AvailableLessonTimesId = table.Column<int>(type: "int", nullable: false),
                    TeacherAvailableHoursId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LessonTimeTeacherAvailableHours", x => new { x.AvailableLessonTimesId, x.TeacherAvailableHoursId });
                    table.ForeignKey(
                        name: "FK_LessonTimeTeacherAvailableHours_LessonTime_AvailableLessonTimesId",
                        column: x => x.AvailableLessonTimesId,
                        principalTable: "LessonTime",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LessonTimeTeacherAvailableHours_TeacherAvailableHours_TeacherAvailableHoursId",
                        column: x => x.TeacherAvailableHoursId,
                        principalTable: "TeacherAvailableHours",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PairTimeTeacherAvailableHours",
                columns: table => new
                {
                    AvailablePairTimesId = table.Column<int>(type: "int", nullable: false),
                    TeacherAvailableHoursId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PairTimeTeacherAvailableHours", x => new { x.AvailablePairTimesId, x.TeacherAvailableHoursId });
                    table.ForeignKey(
                        name: "FK_PairTimeTeacherAvailableHours_PairTime_AvailablePairTimesId",
                        column: x => x.AvailablePairTimesId,
                        principalTable: "PairTime",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PairTimeTeacherAvailableHours_TeacherAvailableHours_TeacherAvailableHoursId",
                        column: x => x.TeacherAvailableHoursId,
                        principalTable: "TeacherAvailableHours",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Assignment_SubjectId",
                table: "Assignment",
                column: "SubjectId");

            migrationBuilder.CreateIndex(
                name: "IX_Assignment_TeacherId",
                table: "Assignment",
                column: "TeacherId");

            migrationBuilder.CreateIndex(
                name: "IX_LessonTimeTeacherAvailableHours_TeacherAvailableHoursId",
                table: "LessonTimeTeacherAvailableHours",
                column: "TeacherAvailableHoursId");

            migrationBuilder.CreateIndex(
                name: "IX_PairTimeTeacherAvailableHours_TeacherAvailableHoursId",
                table: "PairTimeTeacherAvailableHours",
                column: "TeacherAvailableHoursId");

            migrationBuilder.CreateIndex(
                name: "IX_TeacherAvailableHours_TeacherId",
                table: "TeacherAvailableHours",
                column: "TeacherId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Assignment");

            migrationBuilder.DropTable(
                name: "LessonTimeTeacherAvailableHours");

            migrationBuilder.DropTable(
                name: "PairTimeTeacherAvailableHours");

            migrationBuilder.DropTable(
                name: "ParadeTime");

            migrationBuilder.DropTable(
                name: "LessonTime");

            migrationBuilder.DropTable(
                name: "PairTime");

            migrationBuilder.DropTable(
                name: "TeacherAvailableHours");
        }
    }
}
