import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather/weather.service';
import { Weather } from './weather_class'
import { FinalWeather } from './final_weather';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})



export class WeatherComponent implements OnInit {

 
  weather;
  icon_url;
  final_weather: FinalWeather;
  public jsonWeather;

  constructor(private weatherService: WeatherService) { }

  getWeather(): void {
    this.weatherService.getData().subscribe((res: Weather) => 
      {
        console.log(res.weather);
        let final_weather = res.weather[0];
        this.weather = final_weather.main;
        this.icon_url = "http://openweathermap.org/img/w/" + final_weather.icon + ".png";
      })
    //this.weather = this.weatherService.getWeather();
    //console.log(this.weatherService.getWeather());
  }

  ngOnInit() {
    this.getWeather();
    //this.jsonWeather = JSON.parse(this.weather);
  }

}
