using System.ComponentModel.DataAnnotations;

namespace Api.Models.EducationalPlan;

public record TeacherRequestDto(
    [Required] int Year );