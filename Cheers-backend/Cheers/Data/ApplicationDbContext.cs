﻿using Cheers.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Cheers.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<Idea> Ideas { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<ImageCl> ImageCls { get; set; }

        protected override async void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            var gamesCategory = new Category { Id = 1, Name = "Games" };
            var webCategory = new Category { Id = 2, Name = "WebApplications" };
            var escapeCategory = new Category { Id = 3, Name = "EscapeRooms" };
            modelBuilder.Entity<Category>().HasData(gamesCategory);
            modelBuilder.Entity<Category>().HasData(webCategory);
            modelBuilder.Entity<Category>().HasData(escapeCategory);

            //_roleManager.CreateAsync(new IdentityRole("Admin"));

            //var admin = new ApplicationUser(){Email = "admin@admin.admin", UserName = "admin@admin.admin", };
            //string adminPwd = "Admin@1234";
            //var createUser = await _userManager.CreateAsync(admin, adminPwd);
            //if (createUser.Succeeded)
            //{
            //    var actualAdmin = await _userManager.FindByEmailAsync("admin@admin.admin");
            //    _userManager.AddToRoleAsync(actualAdmin, "Admin");
            //}

            modelBuilder.Entity<Idea>().HasData(new Idea { Id = 1, Description = $@"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At risus viverra adipiscing at in tellus integer. Quisque egestas diam in arcu cursus euismod quis. Feugiat pretium nibh ipsum consequat nisl vel pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Lectus vestibulum mattis ullamcorper velit sed ullamcorper. Nibh sed pulvinar proin gravida hendrerit lectus. Orci phasellus egestas tellus rutrum tellus pellentesque. Sed vulputate mi sit amet mauris commodo. Orci dapibus ultrices in iaculis nunc. Sagittis nisl rhoncus mattis rhoncus. Fermentum iaculis eu non diam phasellus vestibulum lorem. Augue interdum velit euismod in pellentesque. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Tortor aliquam nulla facilisi cras fermentum odio eu.

Sit amet nisl purus in mollis.Ac turpis egestas integer eget aliquet nibh praesent tristique.{"\n"}Ullamcorper velit sed ullamcorper morbi tincidunt.Feugiat nibh sed pulvinar proin gravida.Sollicitudin tempor id eu nisl.{"\n"}Suspendisse faucibus interdum posuere lorem ipsum dolor sit.Vel eros donec ac odio tempor orci dapibus ultrices.Venenatis a condimentum vitae sapien pellentesque.Tristique senectus et netus et malesuada fames ac.Bibendum ut tristique et egestas quis.Cursus eget nunc scelerisque viverra mauris.Nulla posuere sollicitudin aliquam ultrices sagittis orci a.{"\n"}Quam quisque id diam vel quam elementum pulvinar.Amet porttitor eget dolor morbi non.Facilisis leo vel fringilla est ullamcorper eget nulla.

Lacinia quis vel eros donec ac odio tempor orci dapibus.Enim tortor at auctor urna nunc.Dolor purus non enim praesent elementum facilisis leo vel.Velit scelerisque in dictum non consectetur a erat nam at.Id diam vel quam elementum pulvinar etiam.Sagittis id consectetur purus ut.{"\n"}Et netus et malesuada fames ac turpis egestas integer eget.Volutpat consequat mauris nunc congue nisi vitae suscipit tellus.Elit ut aliquam purus sit amet luctus venenatis.Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc.Arcu vitae elementum curabitur vitae nunc sed velit dignissim.Dui accumsan sit amet nulla facilisi.Magna eget est lorem ipsum dolor.Dui sapien eget mi proin sed libero enim.

Aliquet nec ullamcorper sit amet risus nullam.{"\n"}Phasellus egestas tellus rutrum tellus pellentesque.Quisque sagittis purus sit amet volutpat.Consequat nisl vel pretium lectus quam id leo.Mi quis hendrerit dolor magna eget est lorem ipsum dolor.Egestas tellus rutrum tellus pellentesque eu.Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar.Ac turpis egestas maecenas pharetra.Quis commodo odio aenean sed adipiscing diam donec adipiscing.Curabitur vitae nunc sed velit dignissim sodales ut.Augue lacus viverra vitae congue eu consequat.Tincidunt tortor aliquam nulla facilisi.

In nulla posuere sollicitudin aliquam ultrices sagittis orci a.Risus feugiat in ante metus dictum at tempor commodo.Tellus rutrum tellus pellentesque eu tincidunt.Ac turpis egestas sed tempus.{"\n"}Eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar.Mattis molestie a iaculis at erat pellentesque.Cursus risus at ultrices mi.Nisl suscipit adipiscing bibendum est ultricies integer.Pretium viverra suspendisse potenti nullam ac tortor.Bibendum enim facilisis gravida neque convallis a cras semper.Donec adipiscing tristique risus nec feugiat in. Tincidunt tortor aliquam nulla facilisi cras fermentum.", ShortDescription = "Best Game", Name = "Game of the year", CategoryId = gamesCategory.Id });
            modelBuilder.Entity<Idea>().HasData(new Idea { Id = 2, Description = $@"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean sed adipiscing diam donec adipiscing tristique risus. Senectus et netus et malesuada. Convallis posuere morbi leo urna molestie. Phasellus faucibus scelerisque eleifend donec pretium vulputate. Nisl nisi scelerisque eu ultrices.{"\n"} Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Scelerisque felis imperdiet proin fermentum leo. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Bibendum ut tristique et egestas. In iaculis nunc sed augue. Metus vulputate eu scelerisque felis. Nunc sed velit dignissim sodales ut eu. Posuere sollicitudin aliquam ultrices sagittis orci. Tristique senectus et netus et malesuada fames.{"\n"} Nunc aliquet bibendum enim facilisis gravida neque convallis a cras.

Id donec ultrices tincidunt arcu.Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi.Massa vitae tortor condimentum lacinia quis.Sit amet facilisis magna etiam.Diam maecenas ultricies mi eget mauris.Nibh nisl condimentum id venenatis a condimentum vitae.Mauris a diam maecenas sed enim ut sem viverra.Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.{"\n"}Felis eget nunc lobortis mattis aliquam faucibus purus in. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh.Urna condimentum mattis pellentesque id nibh tortor.Donec adipiscing tristique risus nec feugiat in. Et malesuada fames ac turpis egestas integer.Eget mauris pharetra et ultrices.Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer.

Id ornare arcu odio ut sem nulla pharetra diam sit.Commodo viverra maecenas accumsan lacus vel facilisis volutpat est.Libero justo laoreet sit amet cursus sit.{"\n"}Morbi tempus iaculis urna id volutpat.Vitae suscipit tellus mauris a.Amet venenatis urna cursus eget nunc.Magna etiam tempor orci eu lobortis.Malesuada proin libero nunc consequat interdum varius sit.Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet.Turpis egestas maecenas pharetra convallis posuere morbi leo urna.Faucibus nisl tincidunt eget nullam non nisi est.Nisl pretium fusce id velit ut tortor pretium viverra suspendisse.Consectetur adipiscing elit ut aliquam purus sit amet luctus.

Viverra aliquet eget sit amet tellus.Eu turpis egestas pretium aenean pharetra magna ac.Integer vitae justo eget magna fermentum iaculis eu.Facilisi morbi tempus iaculis urna id volutpat lacus laoreet.{"\n"}Sed viverra tellus in hac habitasse platea dictumst.Fames ac turpis egestas sed tempus urna et pharetra.Orci phasellus egestas tellus rutrum tellus pellentesque.Mi in nulla posuere sollicitudin aliquam.Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.Pharetra et ultrices neque ornare aenean euismod elementum nisi quis.Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique.Elit eget gravida cum sociis.Vel facilisis volutpat est velit egestas.

Habitant morbi tristique senectus et.Non enim praesent elementum facilisis.Turpis tincidunt id aliquet risus feugiat in ante.{"\n"}Elementum integer enim neque volutpat ac.Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras.Aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod.Sed adipiscing diam donec adipiscing tristique.At consectetur lorem donec massa sapien faucibus et.Massa sed elementum tempus egestas sed sed.Nec dui nunc mattis enim ut tellus elementum.Enim ut tellus elementum sagittis vitae et leo duis ut.In nisl nisi scelerisque eu.", ShortDescription = "Second best Game", Name = "Game of the last year", CategoryId = gamesCategory.Id });
            modelBuilder.Entity<Idea>().HasData(new Idea { Id = 3, Description = $@"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id semper risus in hendrerit gravida rutrum quisque non. Praesent elementum facilisis leo vel fringilla est. Amet facilisis magna etiam tempor orci eu. Dignissim convallis aenean et tortor at risus viverra. Pellentesque habitant morbi tristique senectus et netus. Luctus accumsan tortor posuere ac. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Facilisis magna etiam tempor orci. Purus sit amet luctus venenatis. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Morbi tincidunt ornare massa eget egestas. Nunc lobortis mattis aliquam faucibus.{"\n"} Cursus turpis massa tincidunt dui ut ornare lectus.

Id diam vel quam elementum pulvinar. Nunc sed velit dignissim sodales. Scelerisque eleifend donec pretium vulputate sapien. Vulputate ut pharetra sit amet. Ornare aenean euismod elementum nisi. Volutpat est velit egestas dui. Integer vitae justo eget magna fermentum iaculis eu non diam. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. At quis risus sed vulputate. Volutpat commodo sed egestas egestas fringilla phasellus faucibus. Integer eget aliquet nibh praesent tristique magna sit amet. Tellus in hac habitasse platea dictumst vestibulum rhoncus est. Ipsum a arcu cursus vitae. Augue eget arcu dictum varius duis at consectetur lorem donec. Velit egestas dui id ornare arcu odio ut sem. Pellentesque nec nam aliquam sem. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Orci eu lobortis elementum nibh tellus molestie.

Venenatis tellus in metus vulputate eu scelerisque felis. Eu volutpat odio facilisis mauris sit amet massa vitae.{"\n"} Tristique nulla aliquet enim tortor at auctor urna nunc id. Lobortis mattis aliquam faucibus purus in. Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Ultricies mi eget mauris pharetra et ultrices neque. Justo laoreet sit amet cursus sit amet dictum sit amet. Nulla at volutpat diam ut. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Tortor at risus viverra adipiscing at in. Sem integer vitae justo eget magna fermentum iaculis eu non. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Non curabitur gravida arcu ac tortor dignissim convallis aenean et. Leo integer malesuada nunc vel. Consequat ac felis donec et odio pellentesque.

Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Integer feugiat scelerisque varius morbi enim. Enim praesent elementum facilisis leo. At quis risus sed vulputate. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Dignissim diam quis enim lobortis scelerisque. Integer enim neque volutpat ac tincidunt. Turpis cursus in hac habitasse platea. Vivamus arcu felis bibendum ut. Nisi porta lorem mollis aliquam. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Vitae et leo duis ut diam quam nulla porttitor massa. Dictum at tempor commodo ullamcorper. Non odio euismod lacinia at quis risus sed vulputate.{"\n"}

Faucibus ornare suspendisse sed nisi lacus sed viverra. Feugiat in fermentum posuere urna. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Donec et odio pellentesque diam. Porttitor eget dolor morbi non arcu. Leo in vitae turpis massa sed elementum tempus egestas sed. Tristique senectus et netus et malesuada fames ac. Ut lectus arcu bibendum at varius. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Integer enim neque volutpat ac tincidunt vitae. Arcu cursus vitae congue mauris rhoncus aenean vel.", ShortDescription = "Best site", Name = "Site of the year", CategoryId = webCategory.Id });
        }
    }
}