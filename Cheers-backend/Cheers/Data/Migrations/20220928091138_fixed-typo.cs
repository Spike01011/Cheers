using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Cheers.Data.Migrations
{
    public partial class fixedtypo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ShopDescription",
                table: "Ideas",
                newName: "ShortDescription");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ShortDescription",
                table: "Ideas",
                newName: "ShopDescription");
        }
    }
}
