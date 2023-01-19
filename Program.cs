
using Microsoft.AspNetCore.HttpLogging;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddHttpLogging(options => {
    options.LoggingFields = HttpLoggingFields.RequestPropertiesAndHeaders | HttpLoggingFields.RequestBody | HttpLoggingFields.ResponseBody;
});

builder.Services.AddControllers();

var app = builder.Build();

app.UseHttpLogging();

app.UseRouting();

app.UseDefaultFiles();
app.UseStaticFiles();

app.UseEndpoints(endpoints => {
    endpoints.MapControllers();
});

app.Run();
