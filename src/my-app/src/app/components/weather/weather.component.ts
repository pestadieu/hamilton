import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather;
  public jsonWeather;
  
  constructor(private weatherService: WeatherService) { }

  getWeather(): void {
    this.weather = this.weatherService.getWeather();
  }

  ngOnInit() {
    this.getWeather();
    //this.jsonWeather = JSON.parse(this.weather);
  }

}
