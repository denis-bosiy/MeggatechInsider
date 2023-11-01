using System.ComponentModel.DataAnnotations;

namespace Api.Dto.SearchRequest;

public record TeachersDto(
    [Required] string Year
);