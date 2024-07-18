# API de Películas

Este proyecto es una API RESTful para gestionar una base de datos de películas, directores y estudios. Está construido con Node.js, Express, Sequelize y PostgreSQL. Además de esto tiene un pequeño test y un análisis de código mediante SonarQube

## La estructura del proyecto
```sh
El proyecto presenta la siguiente estrucuta:
├──.github\workflows
│ ├── buil.yml
│ │ └── node_api_pelicula.yml
├── src
│ ├── tests
│ │ └── peliculaController.test.js
│ ├── controller
│ │ ├── directorController.js
│ │ ├── estudioController.js
│ │ ├── peliculaController.js
│ │ └── userController.js
│ ├── db
│ │ ├── migrations
│ │ │ ├── 20240530004126-create-generadopeliculas.js
│ │ │ ├── 20240623234051-create-generadodirector.js
│ │ │ ├── 20240623234107-create-generadoestudio.js
│ │ │ └── 2024062400503-create-user.js
│ │ ├── models
│ │ │ ├── generadodirector.js
│ │ │ ├── generadopeliculas.js
│ │ │ ├── generadoestudio.js
│ │ │ ├── index.js
│ │ │ └── user.js
│ │ └── seeders
│ ├── routes
│ │ └── routes.js
│ └── app.js
├── .dockerignore
├── .env
├── .env_example
├── .gitignore
├── .sequelizerc
├── dockerfile
├── jest.config.js
├── package.json
├── package-lock.json
├── README.md
└── sonar-project.properties
```
## Las instrucciones para configurar y ejecutar el proyecto localmente y Cómo clonar el repositorio y contribuir al proyecto..

### Prerrequisitos

- Node.js (v20.x recomendado)
- PostgreSQL
- npm

### Instalación

1. Clona el repositorio:

```sh
git clone https://github.com/brcastillo10/Api_Peliculas_2.git
# Acceder a la carpeta clonada 
cd Api_Peliculas_2

# Para instalar las dependencias
npm install

#Crear la base de datos en postgres y crear el ".env" en el proyecto con lo siguiente
APP_PORT=______

DB_DIALECT=______
DB_HOST=______
DB_NAME=______
DB_USER=______
DB_PASSWORD=______
JWT_TOKEN_SECRET=______

# Ejecutar en la consola el siguiente comando para migrar las tablas a la base de datos
npx sequelize db:migrate

# Ejecución del programa
npm run dev

# Ejecución de la pruebas

npm test

# Las pruebas con Sonar se hace una ves se haga el push
```
# La configuración de CI/CD, incluyendo los scripts y configuraciones utilizados.

1. Esta fue la configuración que se uso para el CI/CD del proyecto con las pruebas unitarias

```sh
name: Node.js CI

on:
  push:
    branches: ["main"]
  pull_request:
    branches: ["main"]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20]

    steps:
    - uses: actions/checkout@v4

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'

    - name: Install dependencies
      run: npm install

    - name: Build project
      run: npm run build

    - name: Run tests
      run: npm test



```
2. Y esta para la de SonarQube, que fue proporcionada por el propio Sonar.

```sh
name: Build
on:
  push:
    branches:
      - main
  pull_request:
    types: [opened, synchronize, reopened]
jobs:
  sonarcloud:
    name: SonarCloud
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0  # Shallow clones should be disabled for a better relevancy of analysis
      - name: SonarCloud Scan
        uses: SonarSource/sonarcloud-github-action@master
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}  # Needed to get PR information, if any
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}

```