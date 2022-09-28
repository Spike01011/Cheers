using Cheers.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Cheers.Data
{
    public class ApplicationDbContext : IdentityDbContext<IdentityUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<Idea> Ideas { get; set; }
        public DbSet<Category> Categories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            var gamesCategory = new Category { Id = 1, Name = "Games" };
            var webCategory = new Category { Id = 2, Name = "WebApplications" };
            var escapeCategory = new Category { Id = 3, Name = "EscapeRooms" };
            modelBuilder.Entity<Category>().HasData(gamesCategory);
            modelBuilder.Entity<Category>().HasData(webCategory);
            modelBuilder.Entity<Category>().HasData(escapeCategory);

            modelBuilder.Entity<Idea>().HasData(new Idea { Id = 1, Description = "Best game ever", ShortDescription = "Best Game", Name = "Game of the year", CategoryId = gamesCategory.Id });
            modelBuilder.Entity<Idea>().HasData(new Idea { Id = 2, Description = "Second best game ever", ShortDescription = "Second best Game", Name = "Game of the last year", CategoryId = gamesCategory.Id });
            modelBuilder.Entity<Idea>().HasData(new Idea { Id = 3, Description = "Best game site", ShortDescription = "Best site", Name = "Site of the year", CategoryId = webCategory.Id });
        }
    }
}