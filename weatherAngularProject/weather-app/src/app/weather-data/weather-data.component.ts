import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherData } from './weather-data.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css']
})
export class WeatherDataComponent implements OnInit {
  data: WeatherData;
  subscription: Subscription;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    console.log(this.weatherService.dataChanged);
    this.subscription = this.weatherService.dataChanged.subscribe(
      (data: WeatherData) => {
        this.data = data;
      }
    );
    this.data = this.weatherService.data;
  }

}
