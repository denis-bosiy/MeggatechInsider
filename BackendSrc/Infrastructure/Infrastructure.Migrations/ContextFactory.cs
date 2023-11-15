using DatabaseProvider;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Migrations;

public class ContextFactory
{
    public ApplicationContext CreateDbContext(string[] args)
    {
        string connectionString = 
            "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=Books;Pooling=true;Integrated Security=SSPI";
        var optionalBuilder = new DbContextOptionsBuilder<ApplicationContext>();

        optionalBuilder.UseSqlServer( connectionString, 
            assembly => assembly.MigrationsAssembly( "MeggatechInsiderMigrations" ) );

        return new ApplicationContext(optionalBuilder.Options);
    }
}