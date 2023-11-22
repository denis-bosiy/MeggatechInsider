using System.Text.Json.Serialization;

namespace Api.Models.EductionPlanSettings.PlanSettings;

public class EducationPlanSettingsDto
{
    [JsonPropertyName( "numberOf10Classes" )]
    public int NumberOf10Classes { get; set; }

    [JsonPropertyName( "numberOf11Classes" )]
    public int NumberOf11Classes { get; set; }

    [JsonPropertyName( "numberOfWeeksIn1Quarter" )]
    public int NumberOfWeeksIn1Quarter { get; set; }

    [JsonPropertyName( "startOf1Quarter" )]
    public string StartOf1Quarter { get; set; }

    [JsonPropertyName( "numberOfWeeksIn2Quarter" )]
    public int NumberOfWeeksIn2Quarter { get; set; }

    [JsonPropertyName( "startOf2Quarter" )]
    public string StartOf2Quarter { get; set; }

    [JsonPropertyName( "numberOfWeeksIn3Quarter" )]
    public int NumberOfWeeksIn3Quarter { get; set; }

    [JsonPropertyName( "startOf3Quarter" )]
    public string StartOf3Quarter { get; set; }

    [JsonPropertyName( "numberOfWeeksIn4Quarter" )]
    public int NumberOfWeeksIn4Quarter { get; set; }

    [JsonPropertyName( "startOf4Quarter" )]
    public string StartOf4Quarter { get; set; }

    [JsonPropertyName( "numberOfWeeks" )]
    public int NumberOfWeeks { get; set; }

}