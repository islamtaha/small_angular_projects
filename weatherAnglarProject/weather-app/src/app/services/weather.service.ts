import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherData } from '../weather-data/weather-data.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  data: WeatherData;
  dataChanged: Subject<WeatherData> = new Subject<WeatherData>();
  constructor(private httpClient: HttpClient) { }



  getWeather(latitude: number, longitude: number){
	let yourApiKey = '';
    this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&APPID=' + yourApiKey).subscribe(
      (response: Response) => {
        this.data = new WeatherData(response['main']['temp'], 
                                    response['main']['temp_max'], 
                                    response['main']['temp_min'], 
                                    response['main']['humidity'], 
                                    response['wind']['speed'], 
                                    response['wind']['deg']);
        this.dataChanged.next(this.data);
      }
    );
  }
}
