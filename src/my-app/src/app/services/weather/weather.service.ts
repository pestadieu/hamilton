import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  public weather;
  public weatherTest = [];
  url = "https://api.openweathermap.org/data/2.5/weather?id=2766725&appid=4735ac105002fdb98f582cbd7b684703";
  
  constructor(private http: HttpClient) { 
    
  }
  
  getData() {
    return this.http.get(this.url);
  }
  
  async getWeather() {

    //let main;
    //let data = await this.http.get(this.url).toPromise();
    //data = JSON.parse(data);
    return "Rain";

    // this.getData().subscribe(data => {

    //   // console.log(data.weather[0].main);

    //   let lol = data["weather"];
    //   let lool = lol[0];

    //   this.weatherTest.push(lol);

    //   var reformattedArray = this.weatherTest[0].map(obj => {
    //     var rObj = {};
    //     rObj[obj.key] = obj.value;
    //     return rObj;
    //   })

    //   let main = this.weatherTest[0].splice([0])[0]['main'];
    //   console.log("LOOL");
    //   console.log(main);
    //   this.weather = main;
    //   console.log(this.weather);

    //   // console.log(reformattedArray.splice(0));
      
    //   // console.log(this.weatherTest[0].splice([0])[0]['main']);

    // })
    

    // console.log(this.weather);


    // return "rain";


    console.log("END");

  }



}
