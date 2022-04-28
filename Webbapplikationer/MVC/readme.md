# Guide för att snabbt komma igång med ett MVC projekt.

## Innehåll
- [Skapa ett nytt projekt](#skapa-ett-nytt-projekt)  
- [Installera NuGet paket](#installera-nuget-paket)
  - [EntityFrameworkCore](#microsoftentityframeworkcore)
    - [Windows](#windows)
    - [MacOs](#macos)
  - [EntityFrameworkCore.SqlServer](#microsoftentityframeworkcoresqlserver)
    - [Windows](#windows-1)
    - [MacOs](#macos-1)
  - [EntityFrameworkCore.Tools](#microsoftentityframeworkcore.tools)
    - [Windows](#windows-2)
    - [MacOs](#macos-2)
- [Scaffold DbContext](#scaffold-dbcontext)
  - [Windows](#windows-3)
  - [MacOS](#macos-3)
- [Flytta connectionsträngen](#flytta-connectionstringen)
  - [carDbContext.cs](#cardbcontextcs-före)
  - [appsettings.json](#appsettingsjson-före)
- [Lägg till DbContext i startup.cs](#lägg-till-din-dbcontext-i-startupcs)
  - [startup.cs](#startupcs-före)
- [Lägg till en controller](#lägg-till-en-ny-controller)
  - [Förklaring](#förklaring)
  - [Exempel - BrandsController](#exempel-brandscontroller)
- [Genererade filer](#genererade-filer)
  - [Controllers](#controllers)
    - [Exempel - BrandsController.cs](#exempel-brandscontrollercs)
  - [Views](#views)
    - [Exempel - Details.cshtml](#exempel-detailscshtml)
- [Lägg till en länk i navbaren](#lägg-till-en-länk-i-navbaren)
  - [Exempel - Länk för Brands](#exempel---länk-för-brands)
  - [_Layout.cshtml](#_layoutcshtml-före)
- [Starta webbapplikationen](#starta-din-webbapplikation)
  - [Att tänka på](#obs)

---

### Skapa ett nytt projekt
Skapa ett nytt projekt i Visual Studio Community.
|||
|-|- |
| **Typ** | ASP.NET Core web app (Model-View-Controller) |
| **Framework** | .NET 5.0 (current) |
| **Authentication Type** | None|
| **Enable for HTTPS** | Ja |

---

### Installera NuGet Paket
Installera följande nuGet paket.
| Paket                                   | Version |
| --------------------------------------- | ------- |
| Microsoft.EntityFrameworkCore           | 5.0.16  |
| Microsoft.EntityFrameworkCore.SqlServer | 5.0.16  |
| Microsoft.EntityFrameworkCore.Tools     | 5.0.16  |

##### Microsoft.EntityFrameworkCore
>##### Windows
>```powershell
>Install-Package Microsoft.EntityFrameworkCore -v 5.0.16
>```

>##### MacOS
>```powershell
>dotnet add package Microsoft.EntityFrameworkCore -v 5.0.16
>```

#

##### Microsoft.EntityFrameworkCore.SqlServer
>##### Windows
>```powershell
>Install-Package Microsoft.EntityFrameworkCore.SqlServer -v 5.0.16
>```

>##### MacOS
>```powershell
>dotnet add package Microsoft.EntityFrameworkCore.SqlServer -v 5.0.16
>```

#

##### Microsoft.EntityFrameworkCore.Tools
>##### Windows
>```powershell
>Install-Package Microsoft.EntityFrameworkCore.Tools -v 5.0.16
>```

>##### MacOS
>```powershell
>dotnet add package Microsoft.EntityFrameworkCore.Tools -v 5.0.16
>```

---

### Scaffold DbContext
Kör kommandot scaffold-DbContext mot en befintlig databas.

***Exempel***  
##### *Windows*
```
scaffold-DbContext "Server=localhost;Database=carDb;User Id=sa;Password=P@ssw0rd;" Microsoft.EntityFrameworkCore.SqlServer -o Models
```
##### *MacOS*
```
dotnet ef dbcontext Scaffold "Server=locahost;Database=carDb;User ID=sa;Password=P@ssw0rd; "Microsoft.EntityFrameworkCore.SqlServer -o Models
```

---

### Flytta connectionstringen
Flytta din connectionstring från context-filen till ***appsettings.json***

##### ***carDbContext.cs före***
```csharp
protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
{
    if (!optionsBuilder.IsConfigured)
    {
        optionsBuilder.UseSqlServer("server=localhost;database=carDb;user id=sa;Password=P@ssw0rd;");
    }
}
```

##### ***carDbContext.cs efter***
```csharp
protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
{
}
```

##### ***appsettings.json före***
```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning",
      "Microsoft.Hosting.Lifetime": "Information"
    }
  },
  "AllowedHosts": "*"
}
```

##### ***appsettings.json efter***
```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning",
      "Microsoft.Hosting.Lifetime": "Information"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "connString": "Server=localhost;database=carDb;User Id=sa;Password=P@ssw0rd;"
  }
}
```

---

### Lägg till din DbContext i startup.cs
Öppna startup.cs och lägg till din dbcontext.

##### ***startup.cs före***
```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddControllersWithViews();
}
```

##### ***startup.cs efter***
```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddControllersWithViews();
    services.AddDbContext<carDbContext>(
        options => options.UseSqlServer(
            Configuration.GetConnectionString("connString")));
}
```

>##### Referenser
>**Kom ihåg att referera till EntityFrameworkCore och mappen där din DbContext finns.**  
>
>*Exempel*
>```csharp
>using Microsoft.EntityFrameworkCore;
>using WebApplication6.Models;
>``` 

---

### Lägg till en ny controller
1. Högerklicka på mappen Controllers 
2. Välj Add -> Controller...
3. Välj MVC Controller with views, using Entity Framework

##### ***Förklaring***
|                            |                                           |
| -------------------------- | ----------------------------------------- |
| Model class                | Den klass du vill skapa en controller för |
| Data context class         | Din DbContext                             |
| Generate views             | Genererar vyer för controllern            |
| Reference script libraries | Inkluderar referenser til ev. script      |     
| Use a layout page          | Använder grundmallen                      |
| Controller name            | klassnamn + Controller                    |

##### *Exempel BrandsController*
|                            |                  |
| -------------------------- | ---------------- |
| Model class                | Brand            |
| Data context class         | carDbContext     |
| Generate views             | Ja               |
| Reference script libraries | Ja               |     
| Use a layout page          | Ja               |
| Controller name            | BrandsController |

---

### Genererade filer  
Efter att controllern skapats har det tillkommit en del nya filer.

##### ***Controllers***  
I mappen Controllers finns nu BrandsController.cs  
*Filen innehåller all logik för kommunikation mellan views och models.*

>##### ***Exempel BrandsController.cs***
>```csharp
>public class BrandsController : Controller
>{
>    private readonly carDbContext _context;
>
>    public BrandsController(carDbContext context)
>    {
>        _context = context;
>    }
>
>    // GET: Brands
>    public async Task<IActionResult> Index()
>    {
>        return View(await _context.Brands.ToListAsync());
>    }
>}
>```

##### ***Views***
I mappen Views har en ny mapp skapats - Brands.  
*Denna mappen innehåller samtliga vyer för Brands.*
- *Create.cshtml*
  - Vy för att skapa en ny instans av Brand
- *Delete.cshtml*
  - Vy för att radera en instans av Brand
- *Details.cshtml*
  - Vy för att se all information om en instans av Brand
- *Edit.cshtml*
  - Vy för att editera en instans av Brand.
- *index.cshtml*
  - Startsida för Brands.
    - Listar alla instanser.

>##### ***Exempel Details.cshtml***
> ```csharp
> @model WebApplication6.Models.Brand
>
>@{
>    ViewData["Title"] = "Details";
>}
>
><h1>Details</h1>
>
><div>
>    <h4>Brand</h4>
>    <hr />
>    <dl class="row">
>        <dt class = "col-sm-2">
>            @Html.DisplayNameFor(model => model.BrandName)
>        </dt>
>        <dd class = "col-sm-10">
>            @Html.DisplayFor(model => model.BrandName)
>        </dd>
>    </dl>
></div>
><div>
>    <a asp-action="Edit" asp-route-id="@Model.Id">Edit</a> |
>    <a asp-action="Index">Back to List</a>
></div>
> ```

---

### Lägg till en länk i navbaren
Navigera till _Layout.cshtml
> **Views -> Shared -> _Layout.csthml**  
> Denna filen är grundmallen för samtliga vyer i projektet.

##### ***Exempel - länk***
```html
<li class="nav-item">
    <a class="nav-link text-dark" asp-controller="[ControllerNamn]" asp-action="[MetodNamn]">[Länktext]</a>
</li>
```

>##### ***Exempel - Länk för Brands***
>```html
><li class="nav-item">
>    <a class="nav-link text-dark" asp-controller="Brands" >asp-action="Index">Brands</a>
></li>
>```

##### ***_Layout.cshtml före***
```html
<div class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
    <ul class="navbar-nav flex-grow-1">
        <li class="nav-item">
            <a class="nav-link text-dark" asp-controller="Home" asp-action="Index">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-dark" asp-controller="Home" asp-action="Privacy">Privacy</a>
        </li>
    </ul>
</div>
```

##### ***_Layout.cshtml efter***
```html
<div class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
    <ul class="navbar-nav flex-grow-1">
        <li class="nav-item">
            <a class="nav-link text-dark" asp-controller="Home" asp-action="Index">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-dark" asp-controller="Home" asp-action="Privacy">Privacy</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-dark" asp-controller="Brands" asp-action="Index">Brands</a>
        </li>
    </ul>
</div>
```

---

### Starta din webbapplikation
För att starta din webbapplikation trycked du på den "vanliga" startknappen.  
*Det bör stå IIS Express på knappen.*


>##### OBS!
>***Tänk på att webbapplikationen nu är kopplad mot din databas.***  
>*Dvs. alla objekt du skapar/raderar/ändrar kommer att appliceras mot databasen.*
