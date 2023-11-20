using Api.JsonConverters;
using Application;
using DatabaseProvider;
using DatabaseProvider.Repositories;
using Microsoft.EntityFrameworkCore;

namespace Api
{
    public class Program
    {
        public static void Main( string[] args )
        {
            WebApplicationBuilder builder = WebApplication.CreateBuilder( args );

            // Add services to the container.

            builder.Services.AddControllers().AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.Converters.Add(new DateOnlyJsonConverter());
                options.JsonSerializerOptions.Converters.Add(new TimeOnlyJsonConverter());
            });;
            builder.Services.AddDbContext<ApplicationContext>( opts => opts.UseSqlServer( "Data Source=TLCORE21\\SQLEXPRESS;Initial Catalog=MeggatechInsider;Pooling=true;Integrated Security=SSPI;Encrypt=True;TrustServerCertificate=True" ) );
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddCors( p => p.AddPolicy( "cors_allowany", builder =>
            {
                builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
            } ) );
            builder.Services.AddApplication();
            builder.Services.AddDatabaseRepositories();


            WebApplication app = builder.Build();

            // Configure the HTTP request pipeline.
            if ( app.Environment.IsDevelopment() )
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseAuthorization();

            app.UseCors( "cors_allowany" );

            app.MapControllers();

            app.Run();
        }
    }
}