import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.css']
})
export class WeatherFormComponent implements OnInit {
  weatherForm: FormGroup;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    this.weatherService.getWeather(this.weatherForm.value.latitude, this.weatherForm.value.longitude);
  }

  initForm(){
    this.weatherForm = new FormGroup({
      'latitude': new FormControl(null, Validators.required),
      'longitude': new FormControl(null, Validators.required)
    });
  }

}
