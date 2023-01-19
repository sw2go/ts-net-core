Use the template to try something 
---------------------------------
cd temp
git clone git@github.com:sw2go/ts-net-core.git my-try-folder
cd my-try-folder
rd /S .git             ... delete the local repository to avoid an accidental update of the template
cd ClientApp           
npm install            ... install node_modules
npm run build          ... transpile typescript 
cd ..
dotnet watch           ... build and run server

Create new repository from template
-----------------------------------
create a new empty repository 'my-new-app' on github.com
clone the new repo: git clone git@github.com:sw2go/my-new-app.git
clone the template: git clone git@github.com:sw2go/ts-net-core.git

robocopy .\ts-net-core\ .\my-new-app\ /E /R:5 /W:5 /TBD /NP /V /XD ".git" "bin" "obj" "node_modules"

cd my-new-app
rename ts-net-core.csproj to my-new-app.csproj
cd .vscode and replace text ts-net-core in launch.json and tasks.json 

cd ClientApp
npm install

Run app from console with hot reload
------------------------------------
backend:
cd my-new-app
dotnet watch  

frontend:
cd my-new-app/ClientApp
npm run build

browse to:
https://localhost:4200


Debugging
---------
VSCode > 'Open folder' ts-net-core F5 to debug C# .NET Core
VSCode > 'Open folder' ClientApp   F5 to debug Typescript (Client)

Toolchain background infos:
---------------------------
When using Visual Studio a *.sln file and a hidden .vs folder will be created automatically but it is not mandatory for the project
Package handling is easier in visual studio tools package manager, but it can be done form commandline as well (see below)
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
