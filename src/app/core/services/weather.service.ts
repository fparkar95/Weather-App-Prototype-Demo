import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from 'src/app/shared/models/weatherData';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class WeatherService {

    WEATHER_URL = '/api/weather'
    constructor(private http: HttpClient) { }

    getGeneralWeatherDataByCityName(cityName: string, unit: string): Observable<WeatherData>{
        // /api/weather?cityName=<cityName> translated for openWeatherAPI
        let params = new HttpParams()
        params = params.append('q', cityName);
        params = params.append('units', unit)
        params = params.append('appid', environment.apiKey)
        
        return this.http.get(this.WEATHER_URL, {params: params} )
        .pipe(map((data) => data = new WeatherData(data)))
        
    }


    getWeatherAlerts(weatherData: WeatherData){
        //cityId (aka, :id for endpoint) comes from weatherData
        
        //This requests should be api/weather/:id/alerts
        weatherData.alerts = [];
        //empty for mock no alerts
        return weatherData;
    }


    getCityForecast(weatherData: WeatherData, forecast: string /*Enum for Daily, Weekly, Monthly*/){

        //api/weather/:id?resolution<forecast>
        let data = {
            hourly: {},
            daily: {},
            weekly: {},
            monthly: {}
        }

        weatherData.forecastData = data
        return weatherData;
    }
}