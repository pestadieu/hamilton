import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  public weather;
  url = "https://api.openweathermap.org/data/2.5/weather?q=Zurich,ch&appid=4735ac105002fdb98f582cbd7b684703";
  
  constructor(private http: HttpClient) { 
  }
  
  getData(): Observable<any> {
    return this.http.get(this.url).pipe(map(res=>res));
  }
  
  getWeather() {
    this.getData().subscribe(data =>{
      console.log(data.weather[0].main);
      let lol = data["weather"];
      let lool = lol[0];
      let loool = lool["main"];
      console.log(loool);
      this.weather = loool;
    })
    console.log(this.weather);
    return "RAIN";
  }
}
