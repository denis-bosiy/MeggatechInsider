FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["Api/Api.csproj", "./Api/"]
COPY . .
RUN dotnet restore "./Domain/Domain.csproj"
RUN dotnet restore "./Application/Application.csproj"
RUN dotnet restore "./DatabaseProvider/DatabaseProvider.csproj"
RUN dotnet restore "./Api/Api.csproj"
RUN dotnet build "Api/Api.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "Api/Api.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "Api.dll"]