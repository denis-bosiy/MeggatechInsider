using System.Text.Json;
using System.Text.Json.Serialization;

namespace Api.JsonConverters;

public class TimeOnlyJsonConverter : JsonConverter<TimeOnly>
{
    private readonly string _serializationFormat;

    public TimeOnlyJsonConverter() : this( null )
    {
    }

    public TimeOnlyJsonConverter( string? serializationFormat )
    {
        _serializationFormat = serializationFormat ?? "HH:mm";
    }

    public override TimeOnly Read( ref Utf8JsonReader reader,
        Type typeToConvert, JsonSerializerOptions options )
    {
        string? value = reader.GetString();
        return TimeOnly.Parse( value! );
    }

    public override void Write( Utf8JsonWriter writer, TimeOnly value,
        JsonSerializerOptions options )
        => writer.WriteStringValue( value.ToString( _serializationFormat ) );
}