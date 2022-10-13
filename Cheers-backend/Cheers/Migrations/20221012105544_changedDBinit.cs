using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Cheers.Migrations
{
    public partial class changedDBinit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Ideas",
                keyColumn: "Id",
                keyValue: 1,
                column: "Description",
                value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

            migrationBuilder.UpdateData(
                table: "Ideas",
                keyColumn: "Id",
                keyValue: 2,
                column: "Description",
                value: "Varius sit amet mattis vulputate enim nulla aliquet porttitor lacus. Neque gravida in fermentum et sollicitudin ac orci phasellus. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Amet mattis vulputate enim nulla aliquet. Dui nunc mattis enim ut tellus elementum sagittis vitae. Magna fringilla urna porttitor rhoncus dolor. Netus et malesuada fames ac turpis egestas integer eget aliquet. Maecenas pharetra convallis posuere morbi leo. Volutpat sed cras ornare arcu. Vestibulum sed arcu non odio euismod lacinia at quis risus. Sagittis aliquam malesuada bibendum arcu. Faucibus interdum posuere lorem ipsum dolor sit. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Enim neque volutpat ac tincidunt vitae semper quis. Eget sit amet tellus cras adipiscing enim. Eu consequat ac felis donec et odio.");

            migrationBuilder.UpdateData(
                table: "Ideas",
                keyColumn: "Id",
                keyValue: 3,
                column: "Description",
                value: "Libero id faucibus nisl tincidunt eget. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Egestas dui id ornare arcu odio ut. Id aliquet lectus proin nibh nisl condimentum. Magna etiam tempor orci eu lobortis elementum nibh. Lectus magna fringilla urna porttitor rhoncus dolor. Ipsum a arcu cursus vitae congue mauris rhoncus aenean. A cras semper auctor neque vitae tempus quam pellentesque nec. Ipsum consequat nisl vel pretium lectus quam id leo. Nisi est sit amet facilisis magna etiam tempor. Ut etiam sit amet nisl purus in mollis nunc sed. Quis vel eros donec ac. Ut porttitor leo a diam. Aenean vel elit scelerisque mauris. Orci dapibus ultrices in iaculis nunc sed augue lacus viverra. Risus nec feugiat in fermentum posuere.");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Ideas",
                keyColumn: "Id",
                keyValue: 1,
                column: "Description",
                value: "Best game ever");

            migrationBuilder.UpdateData(
                table: "Ideas",
                keyColumn: "Id",
                keyValue: 2,
                column: "Description",
                value: "Second best game ever");

            migrationBuilder.UpdateData(
                table: "Ideas",
                keyColumn: "Id",
                keyValue: 3,
                column: "Description",
                value: "Best game site");
        }
    }
}
