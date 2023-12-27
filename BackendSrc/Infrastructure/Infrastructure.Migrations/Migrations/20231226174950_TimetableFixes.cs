using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Migrations.Migrations
{
    /// <inheritdoc />
    public partial class TimetableFixes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "StudentGroupId",
                table: "Lesson",
                newName: "NumberOfGroups");

            migrationBuilder.AddColumn<string>(
                name: "Guid",
                table: "VerticalSubgroupStudentGroup",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Year",
                table: "VerticalSubgroupStudentGroup",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Guid",
                table: "ParallelStudentGroup",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Year",
                table: "ParallelStudentGroup",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "CourseTeacherAvailableHoursId",
                table: "PairTime",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Guid",
                table: "LiceumStudentGroup",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Year",
                table: "LiceumStudentGroup",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "CourseTeacherAvailableHoursId",
                table: "LessonTime",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "CurrentGroup",
                table: "Lesson",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateOnly>(
                name: "Date",
                table: "Lesson",
                type: "date",
                nullable: false,
                defaultValue: new DateOnly(1, 1, 1));

            migrationBuilder.AddColumn<string>(
                name: "ParadeText",
                table: "Lesson",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "StudentGroupGuid",
                table: "Lesson",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Guid",
                table: "HorizontalSubgroupStudentGroup",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Year",
                table: "HorizontalSubgroupStudentGroup",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Guid",
                table: "ClassStudentGroup",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Year",
                table: "ClassStudentGroup",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "CourseTeacher",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CourseTeacherName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ContractTypeId = table.Column<int>(type: "int", nullable: false),
                    EmploymentDate = table.Column<DateOnly>(type: "date", nullable: false),
                    ExperienceInYearsOnEmploymentDate = table.Column<int>(type: "int", nullable: false, defaultValue: 0),
                    BirthdayDate = table.Column<DateOnly>(type: "date", nullable: false),
                    Year = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CourseTeacher", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CourseTeacher_ContractType_ContractTypeId",
                        column: x => x.ContractTypeId,
                        principalTable: "ContractType",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "CourseType",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CourseTypeName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CourseType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "EducationalPlan",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ClassNumber = table.Column<int>(type: "int", nullable: false),
                    Year = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EducationalPlan", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CourseTeacherAvailableHours",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CourseTeacherId = table.Column<int>(type: "int", nullable: false),
                    DayOfWeek = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CourseTeacherAvailableHours", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CourseTeacherAvailableHours_CourseTeacher_CourseTeacherId",
                        column: x => x.CourseTeacherId,
                        principalTable: "CourseTeacher",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Course",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CourseName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CourseTypeId = table.Column<int>(type: "int", nullable: false),
                    ExpectedHoursPerWeek = table.Column<int>(type: "int", nullable: false),
                    ExpectedGroupsCount = table.Column<int>(type: "int", nullable: false),
                    Year = table.Column<int>(type: "int", nullable: false),
                    CourseEducationalPlanId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Course", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Course_CourseType_CourseTypeId",
                        column: x => x.CourseTypeId,
                        principalTable: "CourseType",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "EducationalPlanSubject",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SubjectId = table.Column<int>(type: "int", nullable: false),
                    EducationalPlanId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EducationalPlanSubject", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EducationalPlanSubject_EducationalPlan_EducationalPlanId",
                        column: x => x.EducationalPlanId,
                        principalTable: "EducationalPlan",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_EducationalPlanSubject_Subject_SubjectId",
                        column: x => x.SubjectId,
                        principalTable: "Subject",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CourseAssignment",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CourseTeacherId = table.Column<int>(type: "int", nullable: false),
                    CourseId = table.Column<int>(type: "int", nullable: false),
                    GroupCount = table.Column<int>(type: "int", nullable: false),
                    Year = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CourseAssignment", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CourseAssignment_CourseTeacher_CourseTeacherId",
                        column: x => x.CourseTeacherId,
                        principalTable: "CourseTeacher",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_CourseAssignment_Course_CourseId",
                        column: x => x.CourseId,
                        principalTable: "Course",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "CourseLesson",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LessonType = table.Column<int>(type: "int", nullable: false),
                    StartTime = table.Column<TimeOnly>(type: "time", nullable: false),
                    EndTime = table.Column<TimeOnly>(type: "time", nullable: false),
                    StudentGroupNumber = table.Column<int>(type: "int", nullable: false),
                    StudentGroupType = table.Column<int>(type: "int", nullable: false),
                    CourseId = table.Column<int>(type: "int", nullable: false),
                    CourseTeacherId = table.Column<int>(type: "int", nullable: false),
                    Classroom = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CourseLesson", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CourseLesson_CourseTeacher_CourseTeacherId",
                        column: x => x.CourseTeacherId,
                        principalTable: "CourseTeacher",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_CourseLesson_Course_CourseId",
                        column: x => x.CourseId,
                        principalTable: "Course",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "CoursesEducationalPlan",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CourseId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CoursesEducationalPlan", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CoursesEducationalPlan_Course_CourseId",
                        column: x => x.CourseId,
                        principalTable: "Course",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "EducationalPlanHoursByWeek",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EducationalPlanId = table.Column<int>(type: "int", nullable: false),
                    WeekStartDate = table.Column<DateOnly>(type: "date", nullable: false),
                    HoursCount = table.Column<int>(type: "int", nullable: false),
                    EducationalPlanSubjectId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EducationalPlanHoursByWeek", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EducationalPlanHoursByWeek_EducationalPlanSubject_EducationalPlanSubjectId",
                        column: x => x.EducationalPlanSubjectId,
                        principalTable: "EducationalPlanSubject",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_EducationalPlanHoursByWeek_EducationalPlan_EducationalPlanId",
                        column: x => x.EducationalPlanId,
                        principalTable: "EducationalPlan",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CoursesEducationalPlanHours",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CoursesEducationalPlanId = table.Column<int>(type: "int", nullable: false),
                    WeekStartDate = table.Column<DateOnly>(type: "date", nullable: false),
                    HoursCount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CoursesEducationalPlanHours", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CoursesEducationalPlanHours_CoursesEducationalPlan_CoursesEducationalPlanId",
                        column: x => x.CoursesEducationalPlanId,
                        principalTable: "CoursesEducationalPlan",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_PairTime_CourseTeacherAvailableHoursId",
                table: "PairTime",
                column: "CourseTeacherAvailableHoursId");

            migrationBuilder.CreateIndex(
                name: "IX_LessonTime_CourseTeacherAvailableHoursId",
                table: "LessonTime",
                column: "CourseTeacherAvailableHoursId");

            migrationBuilder.CreateIndex(
                name: "IX_Course_CourseTypeId",
                table: "Course",
                column: "CourseTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_CourseAssignment_CourseId",
                table: "CourseAssignment",
                column: "CourseId");

            migrationBuilder.CreateIndex(
                name: "IX_CourseAssignment_CourseTeacherId",
                table: "CourseAssignment",
                column: "CourseTeacherId");

            migrationBuilder.CreateIndex(
                name: "IX_CourseLesson_CourseId",
                table: "CourseLesson",
                column: "CourseId");

            migrationBuilder.CreateIndex(
                name: "IX_CourseLesson_CourseTeacherId",
                table: "CourseLesson",
                column: "CourseTeacherId");

            migrationBuilder.CreateIndex(
                name: "IX_CoursesEducationalPlan_CourseId",
                table: "CoursesEducationalPlan",
                column: "CourseId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CoursesEducationalPlanHours_CoursesEducationalPlanId",
                table: "CoursesEducationalPlanHours",
                column: "CoursesEducationalPlanId");

            migrationBuilder.CreateIndex(
                name: "IX_CourseTeacher_ContractTypeId",
                table: "CourseTeacher",
                column: "ContractTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_CourseTeacherAvailableHours_CourseTeacherId",
                table: "CourseTeacherAvailableHours",
                column: "CourseTeacherId");

            migrationBuilder.CreateIndex(
                name: "IX_EducationalPlanHoursByWeek_EducationalPlanId",
                table: "EducationalPlanHoursByWeek",
                column: "EducationalPlanId");

            migrationBuilder.CreateIndex(
                name: "IX_EducationalPlanHoursByWeek_EducationalPlanSubjectId",
                table: "EducationalPlanHoursByWeek",
                column: "EducationalPlanSubjectId");

            migrationBuilder.CreateIndex(
                name: "IX_EducationalPlanSubject_EducationalPlanId",
                table: "EducationalPlanSubject",
                column: "EducationalPlanId");

            migrationBuilder.CreateIndex(
                name: "IX_EducationalPlanSubject_SubjectId",
                table: "EducationalPlanSubject",
                column: "SubjectId");

            migrationBuilder.AddForeignKey(
                name: "FK_LessonTime_CourseTeacherAvailableHours_CourseTeacherAvailableHoursId",
                table: "LessonTime",
                column: "CourseTeacherAvailableHoursId",
                principalTable: "CourseTeacherAvailableHours",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_PairTime_CourseTeacherAvailableHours_CourseTeacherAvailableHoursId",
                table: "PairTime",
                column: "CourseTeacherAvailableHoursId",
                principalTable: "CourseTeacherAvailableHours",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LessonTime_CourseTeacherAvailableHours_CourseTeacherAvailableHoursId",
                table: "LessonTime");

            migrationBuilder.DropForeignKey(
                name: "FK_PairTime_CourseTeacherAvailableHours_CourseTeacherAvailableHoursId",
                table: "PairTime");

            migrationBuilder.DropTable(
                name: "CourseAssignment");

            migrationBuilder.DropTable(
                name: "CourseLesson");

            migrationBuilder.DropTable(
                name: "CoursesEducationalPlanHours");

            migrationBuilder.DropTable(
                name: "CourseTeacherAvailableHours");

            migrationBuilder.DropTable(
                name: "EducationalPlanHoursByWeek");

            migrationBuilder.DropTable(
                name: "CoursesEducationalPlan");

            migrationBuilder.DropTable(
                name: "CourseTeacher");

            migrationBuilder.DropTable(
                name: "EducationalPlanSubject");

            migrationBuilder.DropTable(
                name: "Course");

            migrationBuilder.DropTable(
                name: "EducationalPlan");

            migrationBuilder.DropTable(
                name: "CourseType");

            migrationBuilder.DropIndex(
                name: "IX_PairTime_CourseTeacherAvailableHoursId",
                table: "PairTime");

            migrationBuilder.DropIndex(
                name: "IX_LessonTime_CourseTeacherAvailableHoursId",
                table: "LessonTime");

            migrationBuilder.DropColumn(
                name: "Guid",
                table: "VerticalSubgroupStudentGroup");

            migrationBuilder.DropColumn(
                name: "Year",
                table: "VerticalSubgroupStudentGroup");

            migrationBuilder.DropColumn(
                name: "Guid",
                table: "ParallelStudentGroup");

            migrationBuilder.DropColumn(
                name: "Year",
                table: "ParallelStudentGroup");

            migrationBuilder.DropColumn(
                name: "CourseTeacherAvailableHoursId",
                table: "PairTime");

            migrationBuilder.DropColumn(
                name: "Guid",
                table: "LiceumStudentGroup");

            migrationBuilder.DropColumn(
                name: "Year",
                table: "LiceumStudentGroup");

            migrationBuilder.DropColumn(
                name: "CourseTeacherAvailableHoursId",
                table: "LessonTime");

            migrationBuilder.DropColumn(
                name: "CurrentGroup",
                table: "Lesson");

            migrationBuilder.DropColumn(
                name: "Date",
                table: "Lesson");

            migrationBuilder.DropColumn(
                name: "ParadeText",
                table: "Lesson");

            migrationBuilder.DropColumn(
                name: "StudentGroupGuid",
                table: "Lesson");

            migrationBuilder.DropColumn(
                name: "Guid",
                table: "HorizontalSubgroupStudentGroup");

            migrationBuilder.DropColumn(
                name: "Year",
                table: "HorizontalSubgroupStudentGroup");

            migrationBuilder.DropColumn(
                name: "Guid",
                table: "ClassStudentGroup");

            migrationBuilder.DropColumn(
                name: "Year",
                table: "ClassStudentGroup");

            migrationBuilder.RenameColumn(
                name: "NumberOfGroups",
                table: "Lesson",
                newName: "StudentGroupId");
        }
    }
}
