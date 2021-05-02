
export interface ICurrentData {
    temp: number,
    pressure: number,
    humidity: number,
    temp_min: number,
    temp_max: number
}


export enum TempUnit {
    METRIC = '°C',
    IMPERIAL = '°F',
    STANDARD = 'K'
}


export class WeatherData {

    cityId: number;
    cityName: string;
    country: string;
    currentData: ICurrentData;
    condition: {description: string, icon: string}
    alerts?: any //Would like this to be part of incoming data
    forecastData?: { hourly?: any, daily?: any, weekly?: any, monthly?: any}
    
    constructor(data?){

        if(!data){
            this.mockData();
        }
        else{   
            this.cityId = data.id;
            this.cityName = data.name;
            this.currentData = data.main;
            this.country = data.sys.country;
            this.condition = {
                description: data.weather[0].description,
                icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            }
        }
    }


    mockData(){
        this.cityName = 'Vancouver',
        this.cityId = 1;
        this.country = 'Canada',
        this.currentData = {
            humidity: 1,
            temp: 1,
            temp_max: 1,
            temp_min: 1,
            pressure: 1
        }
        this.condition = {
            description: 'A few clouds',
            icon: '02d'
        }
    }
}