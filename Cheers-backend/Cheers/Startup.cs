using Cheers.Data;
using Cheers.Models;
using Cheers.Models.Daos;
using Cheers.Models.Interfaces;
using Cheers.Services.EmailService;
using Cheers.Services.ImageService;
using Cheers.Services.PaymentService;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.Text;

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
            var userManager = serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();
            string[] roleNames = { "Admin", "User" };
            foreach (var roleName in roleNames)
            {
                var roleExists = await roleManager.RoleExistsAsync(roleName);
                if (!roleExists)
                {
                    roleResult = await roleManager.CreateAsync(new IdentityRole(roleName));
                    if (roleName == "Admin")
                    {
                        if (roleResult.Succeeded)
                        {
                            var role = roleManager.Roles.First(x => x.Name == "Admin");
                            await roleManager.AddClaimAsync(role, new Claim(ClaimTypes.Role, "Admin"));
                        }
                    }
                }
            }
            var user = new ApplicationUser()
            {
                UserName = "admin@admin.admin",
                Email = "admin@admin.admin",
            };
            string userPwd = "Admin.1234";
            await CreateUser(user, userPwd, serviceProvider);
        }
        private async Task CreateUser(ApplicationUser user, string pass, IServiceProvider serviceProvider)
        {
            var roleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
            var userManager = serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();
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

            services.AddDefaultIdentity<ApplicationUser>()
                .AddRoles<IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            //Authentication
            services.AddAuthentication(option =>
            {
                option.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                option.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                option.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(tokenAna =>
                {
                    tokenAna.SaveToken = true;
                    tokenAna.RequireHttpsMetadata = false;
                    tokenAna.TokenValidationParameters =
                    new TokenValidationParameters()
                    {
                        ValidateIssuer = false,
                        ValidateAudience = true,
                        ValidAudience = Configuration["JWT:ValidAudience"],
                        ValidIssuer = Configuration["JWT:ValidIssuer"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JWT:Secret"]))
                    };
                });

            services.AddScoped<IIdeeaDAO, IdeaDbDAO>();
            services.AddScoped<ICategoryDAO, CategoryDbDAO>();
            services.AddScoped<IServiceProvider, ServiceProvider>();
            services.AddScoped<IServiceCollection, ServiceCollection>();
            services.AddScoped<IAccountRepository, AccountRepository>();
            services.AddScoped<IEmailService, EmailService>();
            services.AddScoped<IImageClDAO, ImageClDbDAO>();
            services.AddScoped<IPaymentService, PaymentService>();
            services.AddScoped<IOrderDao, OrderDbDao>();
            services.AddScoped<IImageService, ImageService>();

            services.AddControllersWithViews();
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy", policy =>
                {
                    policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                });
            });
            services.AddHttpContextAccessor();
            var lol = services.BuildServiceProvider();
            CreateRoles(lol).Wait();
            CreateRoles(services.BuildServiceProvider()).Wait(); /*NU MERGE ASTA*/
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

            //TODO -Vezi ce e cu el
            //app.UseStaticFiles(new StaticFileOptions
            //{
            //    FileProvider = new PhysicalFileProvider(Path.Combine(env.ContentRootPath, "images")),
            //    RequestPath = "/Images"
            //});

            app.UseAuthentication();

            app.UseRouting();

            app.UseCors("CorsPolicy");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}