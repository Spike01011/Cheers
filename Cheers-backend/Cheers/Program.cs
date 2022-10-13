using Cheers.Data;
using Cheers.Models.Daos;
using Cheers.Models.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Cheers
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) => Host.CreateDefaultBuilder(args).ConfigureWebHostDefaults(webBuilder =>
        {
            webBuilder.UseStartup<Startup>();
        });
        

        //public static void Main(string[] args)
        //{
        //    var builder = WebApplication.CreateBuilder(args);

        //    // Add services to the container.
        //    var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");
        //    builder.Services.AddDbContext<ApplicationDbContext>(options =>
        //        options.UseSqlServer(connectionString));
        //    builder.Services.AddDatabaseDeveloperPageExceptionFilter();

        //    builder.Services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true)
        //        .AddRoles<IdentityRole>()
        //        .AddEntityFrameworkStores<ApplicationDbContext>();
        //    builder.Services.AddScoped<IIdeeaDAO, IdeaDbDAO>();
        //    builder.Services.AddScoped<ICategoryDAO, CategoryDbDAO>();
        //    builder.Services.AddControllersWithViews();
        //    builder.Services.AddCors(options =>
        //    {
        //        options.AddPolicy("CorsPolicy", policy =>
        //        {
        //            policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
        //        });
        //    });
        //    builder.Services.AddHttpContextAccessor();
        //    CreateRoles(builder.Services.BuildServiceProvider()).Wait();

        //    var app = builder.Build();

        //    // Configure the HTTP request pipeline.
        //    if (app.Environment.IsDevelopment())
        //    {
        //        app.UseMigrationsEndPoint();
        //    }
        //    else
        //    {
        //        app.UseExceptionHandler("/Home/Error");
        //        // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
        //        //app.UseHsts();
        //    }

        //    //app.UseHttpsRedirection();
        //    app.UseStaticFiles();


        //    app.UseRouting();
        //    app.UseCors("CorsPolicy");

        //    app.UseAuthentication();
        //    app.UseAuthorization();

        //    app.MapControllerRoute(
        //        name: "default",
        //        pattern: "{controller=Home}/{action=Index}/{id?}");
        //    //app.MapRazorPages();

        //    app.Run();

        //}

        //private async Task CreateRoles(ServiceProvider serviceProvider)
        //{
        //    IdentityResult roleResult;
        //    var roleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
        //    var userManager = serviceProvider.GetRequiredService<UserManager<IdentityUser>>();
        //    string[] roleNames = { "Admin", "User" };
        //    foreach (var roleName in roleNames)
        //    {
        //        var roleExists = await roleManager.RoleExistsAsync(roleName);
        //        if (!roleExists)
        //        {
        //            roleResult = await roleManager.CreateAsync(new IdentityRole(roleName));
        //        }
        //    }
        //    var user = new IdentityUser()
        //    {
        //        UserName = "admin@admin.admin",
        //        Email = "admin@admin.admin",
        //    };
        //    string userPwd = "Admin.1234";
        //    await CreateUser(user, userPwd, serviceProvider);
        //}
        //private async Task CreateUser(IdentityUser user, string pass, IServiceProvider serviceProvider)
        //{
        //    var roleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
        //    var userManager = serviceProvider.GetRequiredService<UserManager<IdentityUser>>();
        //    var checkUser = await userManager.FindByEmailAsync(user.Email);
        //    if (checkUser == null)
        //    {
        //        var createUser = await userManager.CreateAsync(user, pass);
        //        if (createUser.Succeeded)
        //        {
        //            await userManager.AddToRoleAsync(user, "Admin");
        //        }
        //    }
        //}
    }
}