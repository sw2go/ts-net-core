Copy template
-------------
clone 'ts-net-core'
create an clone empty repository 'my-new-app'
robocopy .\ts-net-core\ .\my-new-app\ /E /R:5 /W:5 /TBD /NP /V /XD ".git" "bin" "obj" "node_modules"

cd my-new-app
rename ts-net-core.csproj to my-new-app.csproj
cd .vscode and replace text ts-net-core in launch.json and tasks.json 

cd ClientApp
npm install

Run app from console
--------------------
backend:
cd ts-net-core
dotnet watch  

frontend:
cd ClientApp         
npm run build

browse to https://localhost:4200


Debugging
---------
VSCode > 'Open folder' ts-net-core F5 to debug C# .NET Core
VSCode > 'Open folder' ClientApp   F5 to debug Typescript (Client)

Tips:
-----
/ClientApp/package.json contains npm scripts like "build" to "hot rebuild" changes in typescript
/ClientApp/webpack.config.js transpiles typescript files into 'wwwroot' of the server
/.vscode/tasks.json contains definitions like "watch" to "hot reload" files on change (live-server)
global.json is required for C# debugging (sdk must match project target framework)



Initial setup
-------------
Go to project folder i.e. "ts-net-core" an create empty backend (web-project) 
```
cd ts-net-core
dotnet new web -f "net6.0"
dotnet add package xyz -s https://api.nuget.org/v3/index.json
```

Edit Program.cs as needed
```
app.UseDefaultFiles();
app.UseStaticFiles();
```
Add a wwwroot folder to the project an add a index.html

To run the backend 
```
dotnet run
```
