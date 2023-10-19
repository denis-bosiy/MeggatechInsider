using MegatechExcelReportGeneratorApi.Data;
using MegatechExcelReportGeneratorApi.Services;

namespace MegatechExcelReportGeneratorApi
{
    public class Program
    {
        public static void Main( string[] args )
        {
            WebApplicationBuilder builder = WebApplication.CreateBuilder( args );

            // Add services to the container.

            builder.Services.AddSingleton<IReportTemplateFileInfoProvider, ReportTemplateFileInfoProvider>();
            builder.Services.AddSingleton<IReportGenerator, ReportGenerator>();

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            WebApplication app = builder.Build();

            // Configure the HTTP request pipeline.
            if ( app.Environment.IsDevelopment() )
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}