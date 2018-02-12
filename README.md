# CourseProject

## Spint1  (01 Dec 2017 - 08 Dec 2017)

The goal for the Spint 1 of the project was to create an MVP (Minimum Viable Product). The scope for sprint1 was as follows - 

1. Front-end - Create WebApp using React

2. Front-End - Use styles (CSS) in the React WebApp      

3. Front-End - User Login and Registration areas in the React WebApp

4. Back-End - Create C# WebApi(s) for CRUD operations on 2 entities 

5. Database -  Create Database with at least 2 Tables, etc 

Integrate - Integrate back-end and Front-end components 

###   Status - Sprint1 Activities are completed.


## Spint2 (08 Dec 2017 - 15 Dec 2017)

Goal for this sprint was to build on the MVP from the last spint - create responsive UI, implement storage and integrate CRUD ops froontent to backend.

1. Front-end - Responsive - Make the app responsive using bootstrap

2. Front-end - Redux storage - Use Redux storage for inter-component communication and state management

3. Front-end and back-end - Integrated CRUD operation - to make the App live so that the user can have persistent CRUD operations

4. Refactor the code - to reduce the potential debt, refactor the code.

###   Status - Sprint2 Activities are completed.

## Spint3 (planned) (15 Dec 2017 - 22 Dec 2017)

Goal of this sprint is to build user specific UI and CRUD operations and start working on using Cassandra as the backend DB. 

1. User specific data - Make the app CRUD user specific data. Currently the app shows the data irrespective of logged in user. Going forward, we will restrict the CRUD ops to the user. 

2. Componentize the core DataGrid control for reuse

3. Start working on Cassandra as the back-end DB

4. Refactor the code - to reduce the potential debt, refactor the code.


----------------------------------------------------------------------------------------------------------------------------------------

#  Background of the project - 

This Project uses following features
##     1.	FrontEnd 
This App is an SPA that uses ReactJS framework to create the frontend. While building the frontend, we used following concepts and tools.

a.    FLUX : The frontend of the App has used REDUX stores to adhere to the FLUX architectural concepts (Single-source of truth, State is read-only and Changes are made with pure functions)

b.    Pure functions : Most of the code in this App uses Pure functions 

   1. function always returns the same result if the same arguments are passed in. It does not depend on any state, or data, change during a program’s execution. It must only depend on its input arguments 
    
   2. The function does not produce any observable side effects such as network requests, input and output devices, or data mutation.
    
c.    ES2015 syntax : for most part this app uses ES6 syntax and functionality.

d.    Other modules and libraries – This app uses redux and react-redux for FLUX.  And even if most part uses ES2016 syntax, in a few places, we have used underscore for data manipulation. Axios module is used for HTTP calls.

e.    Responsive UI - This app implements responsive UI using maxcdn.bootstrapcdn.com

f.    Styles - This app uses MaterializeCSS library to implement the styles for the UI elements.

g.    Authentication - Google Authentication is implemented using FireBase google service.
      
##     2.    BackEnd (AKA middle-tier)
Backend of this App uses .NETCORE to provide RESTful web API to process the data storage requests. While building the backend, we used following concepts and tools.

a.  .NETCORE MVC framework - to create a scalable and loosely coupled architecture, MVC framework of .NETCORE was leveraged. Controller objects provided the RESTful API endpoints while attribute-based .NETCORE routing was used to implement HTTP methods (GET, POST, PUT and DELETE)
      
b.  Repository pattern - To reduce network-traffic and calls to the Database, we used Repository pattern.
      
c.  Singleton Pattern for DB connection - DB connection object is created once per App instance and  reused to query the DB. 
      
 ##    3.    Database
 Azure CosmosDB (with SQL/DocumentDB API) was used as the database for the app.
    
 1. Azure CosmosDB is one of the most scalable, highest performing databases that gives us the flexibility to use any of the below APIs - SQL (Document DB), JavaScript (Mongo), Azure Table storage(Column Collection) amd Graph (Gremlin). It is a JSON based document database that allows us to use any of the database format  - Azure DocumentDB, Apache® Cassandra, Mongo or Gremlin. We chose Cosmod DB (SQL) format for the Sprint1 and 2 becasue of following reasons - 
 
a.    Pay-as-you-go model - Azure CosmosDB allows us to pay only when we use it.

b.    Scalabilty - It is indeed a planet-scale DB with very low-latency.

c.    Expandibility - As we mature our project to create a Smart App, (i.e to build on Android platform), we will need the backend to 
support Notification services, local data storage, ease of deployment and debugging along with a few-of the CI/CD concepts. Azure Cosmos DB is a part of Azure PasS offering and is seamlessly integrated into other Azure PaaS services which we can use in the furture without having to invest any special amount of time and money.


##     4.    Deployment Platform for the app 

Azure was chosen as the deployment platform for the WebApp beacuse of the points mentioned above.

##     5.    Source Code repository

GIT is used as Source code repository as in the future we want to implement CI/CD concerts using a mixture of open-source and Azure tools and technologies.

##     6.    Project management 

Agile methology was used for scope control, stake-holder management and status reporting. GIT Kan-Ban dashboard is used for backlog management.


