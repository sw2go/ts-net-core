
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

var app = builder.Build();

app.UseRouting();

app.UseDefaultFiles();
app.UseStaticFiles();

app.UseEndpoints(endpoints => {
    endpoints.MapControllers();
});

app.Run();
