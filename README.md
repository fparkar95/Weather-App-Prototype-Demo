# Weather-App-Prototype-Demo
A demo Angular Application that queries Weather Data

### Date

May 2nd, 2021.

### Location of deployed application

https://fparkar95.github.io/Weather-App-Prototype-Demo/

### Time spent

Approximately 4 hours on building the app on Angular with the stretch goals included.

### Assumptions made

The given task was to retrieve the Current Data of a given city.

When designing the REST API, it is important to know that to READ, the standard is way to use a GET Method.

All other write operations should be provided through POST/PUT/DELETE (Which is not part of this task).

Since reading is the goal of the task, the design should keep the reading query as simple as possible.

```
Endpoint:

GET: api/weather
```


With REST API standards, we also provide query parameters within the url of the GET request.

Thus, my assumption is to get the generic chunk of data by passing in the name.

```
My design => api/weather?cityName=<cityName>

```
After I translated and applied the proxy to openWeatherAPI, this endpoint converted to:

```
http://api.openweathermap.org/data/2.5/weather?q=<cityName>&appid=<apiKey>
```

The minimum data that I personally care about when looking at the weather of a city, is what I want to provide in the response:

Design of response:

```
response = {
    cityId: <string>,
    cityName: <string>,
    country <string>,
    currentData {temp, pressure, min,max, humidity},
    condition: <sunny?,cloudy?, rainy? etc..> string or enum,
    alerts: [
        list of warnings or emergencies, openWeatherAPI free version does not allow this.
    ]

    Forecasts can be pulled separately after, using cityId
}

```
If any other queries are implemented for a city after the generic quick query, we will have the `cityId` from the response. Thus, we can pass in the unique identifier to retrieve other data related to the city.

```
My Design:

api/weather/:id

Translation to openWeatherAPI:
http://api.openweathermap.org/data/2.5/weather?q=<cityId>&appid=<apiKey>
```

In a real world app, I would add more features to this endpoint. Hourly, Daily, Weekly Forecasts etc:

```
api/weather/:id?resolution=<forecast-resolution>

```

### Shortcuts/Compromises made
For the purpose of the Demo, I decided to prompt the demo user to choose the unit of measurement for the weather data.
In a real world application, I would implement <strong>Localization</strong> for the app to determine the User's or browser's locale to determine what units should be given back (and provide them the ability to change views if wanted). Angular is very powerful in that way, and has many techniques on how to set that up all in client side code and templates.


In a real world application, I would design an authorization mechanism for users who trigger the API endpoints. The app would need to be careful about how many times a user can ping an endpoint, what endpoints are they allowed to ping. Tokenization usually helps out with these precautions/safety nets.

I did not implement much error handling for the purpose of the demo and I did not write Unit Tests for the Angular components because this code was treated as a prototype. A real world application code will have every piece tested before being merged into a main branch.

In a real world application, I would keep city data (Coordinates etc..) and weather data separate. It would be neat to pass in the same cityId from a table/collection as a primary key to the weather data table/collection. City Data could be used to query data for maps, but weather data could be queried for additional information for the particular city.


### Stretch goals attempted

* Applied a mock authentication service because I am not using any database to store any credentials or using a service provider to hold on to the data. 
* For the demo's purpose I have allowed authenticating with demo credentials to view the weather dashboard.
* Built a Simple Web UI to view and ask for weather data for a city using Angular.


## Instructions to run assignment locally

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.10.

### Setup
Run `npm install` after downloading or cloning the repo.

### Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. It will proxy to the openWeatherAPI

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



## What is not included in the solution?

I did not spend time working on the CSS for my Angular components. I thought it would be a waste of the time because I am trying to demonstrate the flow of my design, I did not want to spend too much time trying to make it look pretty.

The goal of my demo is to show that this app can be well organized in an Angular framework, the code can be clean and contacting REST API's and manipulating data for the UI is easy to do within the framework.

No Unit Tests of Angular Components. In a Real world application, that would be a priority.


## Other information.

This is just my solution to a fun problem to demo! I wanted to demonstrate my thought process in a short period of time and also show good web app structuring. The usual structure you see in angualr project is of the following format:

```
src
    /app
        /components
        /models
        /services
        app.component
        app.module
        app.routing
        ...
    /assets
```
My demo includes a folder structure for better organization as projects increase in size. Modules and Models are more clear in indicating what is shareable and what is not. 

```
src
    /app
        /core
            /guard
            /services
                /weather-service
        /modules
            /weather-dashboard
                /component
                    weather-dashboard.component.html
                    weather-dashoard.component.ts
                weather-dashboard.routing.ts
        /shared
            /models
                /weather-data.ts
        app.component
        ...

```




