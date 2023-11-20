using DatabaseProvider;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Infrastructure.Migrations;

public class ContextFactory : IDesignTimeDbContextFactory<ApplicationContext>
{
    public ApplicationContext CreateDbContext(string[] args)
    {
        string connectionString =
            "Data Source=TLCORE21\\SQLEXPRESS;Initial Catalog=MeggatechInsider;Pooling=true;Integrated Security=SSPI;Encrypt=True;TrustServerCertificate=True";
        DbContextOptionsBuilder<ApplicationContext> optionalBuilder = new DbContextOptionsBuilder<ApplicationContext>();

        optionalBuilder.UseSqlServer( connectionString, 
            assembly => assembly.MigrationsAssembly( "Infrastructure.Migrations" ) );

        return new ApplicationContext(optionalBuilder.Options);
    }
}