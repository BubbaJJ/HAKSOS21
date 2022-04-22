# Databaser

## MSSQL
### Innehåll
[CRUD](Demokod/CRUD.sql)  
[Joins](Demokod/Joins.sql)  
[Subqueries](Demokod/Subqueries.sql)

## Docker
### Ladda ner SQL Server 2019
```code
docker pull mcr.microsoft.com/mssql/server:2019-latest
```

### Skapa en container
```code
docker run --name sql2019 -e ”ACCEPT_EULA=Y” -e ”SA_PASSWORD=P@ssw0rd” -p 1433:1433 -d mcr.microsoft.com/mssql/server:2019-latest
```

### Starta SQL Server
```code
docker start sql2019
```

### Stoppa SQL Server
```code
docker stop sql2019
```