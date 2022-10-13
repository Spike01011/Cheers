using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Cheers.Migrations
{
    public partial class UploadImage6 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ImageCls_Ideas_IdeaId",
                table: "ImageCls");

            migrationBuilder.DropIndex(
                name: "IX_ImageCls_IdeaId",
                table: "ImageCls");

            migrationBuilder.DropColumn(
                name: "ImageName",
                table: "ImageCls");

            migrationBuilder.AlterColumn<int>(
                name: "IdeaId",
                table: "ImageCls",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "IdeaId",
                table: "ImageCls",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<string>(
                name: "ImageName",
                table: "ImageCls",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_ImageCls_IdeaId",
                table: "ImageCls",
                column: "IdeaId");

            migrationBuilder.AddForeignKey(
                name: "FK_ImageCls_Ideas_IdeaId",
                table: "ImageCls",
                column: "IdeaId",
                principalTable: "Ideas",
                principalColumn: "Id");
        }
    }
}
