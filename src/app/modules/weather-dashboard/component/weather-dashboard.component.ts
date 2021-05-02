import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/core/services/user.service';
import { WeatherService } from 'src/app/core/services/weather.service';
import { User } from 'src/app/shared/models/user';
import { TempUnit, WeatherData } from 'src/app/shared/models/weatherData';

@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.css']
})
export class WeatherDashboardComponent implements OnInit {

  loading = false;
  user: User;
  public citySearchForm: FormGroup;
  public data: WeatherData;
  units = ['METRIC', 'IMPERIAL', 'STANDARD']
  selectedUnit = 'METRIC';
  unitString = TempUnit.METRIC;

  constructor(
    private userService: UserService,
    private weatherService: WeatherService, 
    private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.loading = true;
      this.userService.getAllUsers().pipe(first()).subscribe(users => {
          this.loading = false;
          this.user = users[0];
      });

      this.citySearchForm = this.formBuilder.group({
        location: [""]
      });
  }


  getGeneralCityData(formValues) {
    if(formValues.location !== ''){
      this.weatherService.getGeneralWeatherDataByCityName(formValues.location, this.selectedUnit.toLowerCase())
    .subscribe(data => {
      this.data = data;
    },
    err => {
      //mock data
      this.data = new WeatherData();
      })
    } 

    for(let unit of this.units){
      if(this.selectedUnit === unit){
        this.unitString = TempUnit[`${unit}`]
      }
    }
  }


  setUnit(unit: string){
    this.selectedUnit = unit;
  }

  getAlerts(weatherData:WeatherData){
    this.data = this.weatherService.getWeatherAlerts(weatherData)
  }

  getForecast(weatherData:WeatherData, forecast: string){
    this.data = this.weatherService.getCityForecast(weatherData, forecast)
  }
}
