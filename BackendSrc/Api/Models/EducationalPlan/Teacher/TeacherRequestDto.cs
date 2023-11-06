using System.ComponentModel.DataAnnotations;

namespace Api.Models.EducationalPlan.Teacher;

public record TeacherRequestDto(
    [Required] int Year );