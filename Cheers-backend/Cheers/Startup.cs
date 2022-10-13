using System;
using System.Threading.Tasks;
using Cheers.Data;
using Cheers.Models;
using Cheers.Models.Daos;
using Cheers.Models.Interfaces;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;

namespace Cheers
{
    internal class Startup
    {
        public IConfiguration Configuration { get; }
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        private async Task CreateRoles(ServiceProvider serviceProvider)
        {
            IdentityResult roleResult;
            var roleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
            var userManager = serviceProvider.GetRequiredService<UserManager<IdentityUser>>();
            string[] roleNames = { "Admin", "User" };
            foreach (var roleName in roleNames)
            {
                var roleExists = await roleManager.RoleExistsAsync(roleName);
                if (!roleExists)
                {
                    roleResult = await roleManager.CreateAsync(new IdentityRole(roleName));
                }
            }
            var user = new IdentityUser()
            {
                UserName = "admin@admin.admin",
                Email = "admin@admin.admin",
            };
            string userPwd = "Admin.1234";
            await CreateUser(user, userPwd, serviceProvider);
        }
        private async Task CreateUser(IdentityUser user, string pass, IServiceProvider serviceProvider)
        {
            var roleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
            var userManager = serviceProvider.GetRequiredService<UserManager<IdentityUser>>();
            var checkUser = await userManager.FindByEmailAsync(user.Email);
            if (checkUser == null)
            {
                var createUser = await userManager.CreateAsync(user, pass);
                if (createUser.Succeeded)
                {
                    await userManager.AddToRoleAsync(user, "Admin");
                }
            }
        }
        public void ConfigureServices(IServiceCollection services)
        {
            var connectionString = Configuration.GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(connectionString));
            services.AddDatabaseDeveloperPageExceptionFilter();

            services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true)
                .AddRoles<IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>();
            services.AddScoped<IIdeeaDAO, IdeaDbDAO>();
            services.AddScoped<ICategoryDAO, CategoryDbDAO>();
            services.AddScoped<IImageClDAO, ImageClDbDAO>();
            services.AddControllersWithViews();
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy", policy =>
                {
                    policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                });
            });
            services.AddHttpContextAccessor();
            CreateRoles(services.BuildServiceProvider()).Wait();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseMigrationsEndPoint();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                //app.UseHsts();
            }

            //app.UseHttpsRedirection();
            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(env.ContentRootPath, "images")),
                RequestPath = "/Images"
            });


            app.UseRouting();
            app.UseCors("CorsPolicy");

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
                endpoints.MapRazorPages();
            });
        }
    }
}