using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Cheers.Migrations
{
    public partial class UploadImage5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Image",
                table: "ImageCls",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Image",
                table: "ImageCls");
        }
    }
}
