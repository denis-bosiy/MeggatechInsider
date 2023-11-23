using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Migrations.Migrations
{
    /// <inheritdoc />
    public partial class initialmigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ClassStudentGroup",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Parallel = table.Column<int>(type: "int", nullable: false),
                    ClassNumber = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClassStudentGroup", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ContractType",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ContractTypeName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContractType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "HorizontalSubgroupStudentGroup",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Parallel = table.Column<int>(type: "int", nullable: false),
                    SubgroupNumber = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HorizontalSubgroupStudentGroup", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "LiceumStudentGroup",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LiceumStudentGroup", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ParallelStudentGroup",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Parallel = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ParallelStudentGroup", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PaymentType",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PaymentTypeName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PaymentType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SubjectCategory",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SubjectCategoryName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SubjectCategory", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SubjectType",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SubjectTypeName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SubjectType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TeacherCategory",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TeacherCategoryName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TeacherCategory", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TeacherEducation",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EducationName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TeacherEducation", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "VerticalSubgroupStudentGroup",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Parallel = table.Column<int>(type: "int", nullable: false),
                    ClassNumber = table.Column<int>(type: "int", nullable: false),
                    SubgroupNumber = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VerticalSubgroupStudentGroup", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Subject",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SubjectName = table.Column<string>(type: "nvarchar(128)", maxLength: 128, nullable: false),
                    PaymentTypeId = table.Column<int>(type: "int", nullable: false),
                    SubjectTypeId = table.Column<int>(type: "int", nullable: false),
                    SubjectCategoryId = table.Column<int>(type: "int", nullable: false),
                    NotebooksPaymentInPercents = table.Column<int>(type: "int", nullable: false),
                    ExpectedHoursPerWeekForTenthClasses = table.Column<int>(type: "int", nullable: false),
                    ExpectedGroupsCountForTenthClasses = table.Column<int>(type: "int", nullable: false),
                    ExpectedHoursPerWeekForEleventhClasses = table.Column<int>(type: "int", nullable: false),
                    ExpectedGroupsCountForEleventhClasses = table.Column<int>(type: "int", nullable: false),
                    IsEge = table.Column<bool>(type: "bit", nullable: false),
                    Year = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Subject", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Subject_PaymentType_PaymentTypeId",
                        column: x => x.PaymentTypeId,
                        principalTable: "PaymentType",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Subject_SubjectCategory_SubjectCategoryId",
                        column: x => x.SubjectCategoryId,
                        principalTable: "SubjectCategory",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Subject_SubjectType_SubjectTypeId",
                        column: x => x.SubjectTypeId,
                        principalTable: "SubjectType",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Teacher",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TeacherName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TeacherCategoryId = table.Column<int>(type: "int", nullable: false),
                    TeacherCategoryAffectsOnSalary = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    ContractTypeId = table.Column<int>(type: "int", nullable: false),
                    ContractTypeAffectsOnSalary = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    EducationId = table.Column<int>(type: "int", nullable: false),
                    IsClassTeacher = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    AdvancedSubjectsAffectOnSalary = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    EgeAffectsOnSalary = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    EmploymentDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ExperienceInYearsOnEmploymentDate = table.Column<int>(type: "int", nullable: false, defaultValue: 0),
                    BirthdayDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Year = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Teacher", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Teacher_ContractType_ContractTypeId",
                        column: x => x.ContractTypeId,
                        principalTable: "ContractType",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Teacher_TeacherCategory_TeacherCategoryId",
                        column: x => x.TeacherCategoryId,
                        principalTable: "TeacherCategory",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Teacher_TeacherEducation_EducationId",
                        column: x => x.EducationId,
                        principalTable: "TeacherEducation",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Lesson",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LessonType = table.Column<int>(type: "int", nullable: false),
                    StartTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EndTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    StudentGroupId = table.Column<int>(type: "int", nullable: false),
                    StudentGroupType = table.Column<int>(type: "int", nullable: false),
                    SubjectId = table.Column<int>(type: "int", nullable: false),
                    TeacherId = table.Column<int>(type: "int", nullable: false),
                    Classroom = table.Column<int>(type: "int", nullable: false),
                    ClassStudentGroupId = table.Column<int>(type: "int", nullable: true),
                    HorizontalSubgroupStudentGroupId = table.Column<int>(type: "int", nullable: true),
                    LiceumStudentGroupId = table.Column<int>(type: "int", nullable: true),
                    ParallelStudentGroupId = table.Column<int>(type: "int", nullable: true),
                    VerticalSubgroupStudentGroupId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lesson", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Lesson_ClassStudentGroup_ClassStudentGroupId",
                        column: x => x.ClassStudentGroupId,
                        principalTable: "ClassStudentGroup",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Lesson_HorizontalSubgroupStudentGroup_HorizontalSubgroupStudentGroupId",
                        column: x => x.HorizontalSubgroupStudentGroupId,
                        principalTable: "HorizontalSubgroupStudentGroup",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Lesson_LiceumStudentGroup_LiceumStudentGroupId",
                        column: x => x.LiceumStudentGroupId,
                        principalTable: "LiceumStudentGroup",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Lesson_ParallelStudentGroup_ParallelStudentGroupId",
                        column: x => x.ParallelStudentGroupId,
                        principalTable: "ParallelStudentGroup",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Lesson_Subject_SubjectId",
                        column: x => x.SubjectId,
                        principalTable: "Subject",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Lesson_Teacher_TeacherId",
                        column: x => x.TeacherId,
                        principalTable: "Teacher",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Lesson_VerticalSubgroupStudentGroup_VerticalSubgroupStudentGroupId",
                        column: x => x.VerticalSubgroupStudentGroupId,
                        principalTable: "VerticalSubgroupStudentGroup",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Lesson_ClassStudentGroupId",
                table: "Lesson",
                column: "ClassStudentGroupId");

            migrationBuilder.CreateIndex(
                name: "IX_Lesson_HorizontalSubgroupStudentGroupId",
                table: "Lesson",
                column: "HorizontalSubgroupStudentGroupId");

            migrationBuilder.CreateIndex(
                name: "IX_Lesson_LiceumStudentGroupId",
                table: "Lesson",
                column: "LiceumStudentGroupId");

            migrationBuilder.CreateIndex(
                name: "IX_Lesson_ParallelStudentGroupId",
                table: "Lesson",
                column: "ParallelStudentGroupId");

            migrationBuilder.CreateIndex(
                name: "IX_Lesson_SubjectId",
                table: "Lesson",
                column: "SubjectId");

            migrationBuilder.CreateIndex(
                name: "IX_Lesson_TeacherId",
                table: "Lesson",
                column: "TeacherId");

            migrationBuilder.CreateIndex(
                name: "IX_Lesson_VerticalSubgroupStudentGroupId",
                table: "Lesson",
                column: "VerticalSubgroupStudentGroupId");

            migrationBuilder.CreateIndex(
                name: "IX_Subject_PaymentTypeId",
                table: "Subject",
                column: "PaymentTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Subject_SubjectCategoryId",
                table: "Subject",
                column: "SubjectCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Subject_SubjectTypeId",
                table: "Subject",
                column: "SubjectTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Teacher_ContractTypeId",
                table: "Teacher",
                column: "ContractTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Teacher_EducationId",
                table: "Teacher",
                column: "EducationId");

            migrationBuilder.CreateIndex(
                name: "IX_Teacher_TeacherCategoryId",
                table: "Teacher",
                column: "TeacherCategoryId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Lesson");

            migrationBuilder.DropTable(
                name: "ClassStudentGroup");

            migrationBuilder.DropTable(
                name: "HorizontalSubgroupStudentGroup");

            migrationBuilder.DropTable(
                name: "LiceumStudentGroup");

            migrationBuilder.DropTable(
                name: "ParallelStudentGroup");

            migrationBuilder.DropTable(
                name: "Subject");

            migrationBuilder.DropTable(
                name: "Teacher");

            migrationBuilder.DropTable(
                name: "VerticalSubgroupStudentGroup");

            migrationBuilder.DropTable(
                name: "PaymentType");

            migrationBuilder.DropTable(
                name: "SubjectCategory");

            migrationBuilder.DropTable(
                name: "SubjectType");

            migrationBuilder.DropTable(
                name: "ContractType");

            migrationBuilder.DropTable(
                name: "TeacherCategory");

            migrationBuilder.DropTable(
                name: "TeacherEducation");
        }
    }
}
