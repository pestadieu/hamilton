import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


export interface Sensor{
  measurement: Measurement
}

export interface Measurement{
  value: number,
  utc: number
}

@Injectable({
  providedIn: 'root'
})

export class RestService {
  endpoint = 'http://130.82.239.210/signal/';

  constructor(private http: HttpClient) {

  }

  ngOnInit(){
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  /*getAllData(): Observable<any> {
    return this.http.get(endpoint + 'signal/' ).pipe(
      map(this.extractData));
  }*/
  
  getData(): Observable<any> {
    return this.http.get(this.endpoint).pipe(
      map(this.extractData));
    }

    getLat():Observable<Sensor> {
      return this.http.get<Sensor>(this.endpoint + 'NP_LatDegree/value').pipe();
    }

    getLong():Observable<Sensor> {
      return this.http.get<Sensor>(this.endpoint + 'NP_LongDegree/value').pipe();
    }
}
