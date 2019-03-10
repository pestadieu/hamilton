import { Component, Input, ViewChild, NgZone, OnInit } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';
import {LocationPoints} from 'src/app/locationPoints';
import { RestService, Sensor } from 'src/app/rest.service';
 

declare var google: any;
var image: 'https://img.icons8.com/color/2x/fiat-500.png';

interface Location {
  lat: number;
  lng: number;
  viewport?: Object;
  zoom: number;
  address_level_1?:string;
  address_level_2?: string;
  address_country?: string;
  address_zip?: string;
  address_state?: string;
  marker?: Marker;
}

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  icon: {
    url: string,
    scaledSize: {
      width: number,
      height: number
    }
  };
}



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  locations: LocationPoints;

  geocoder:any;
  public location:Location = {
    lat: 47.432111,
    lng: 9.377184,
    zoom: 11,

    marker: {
      lat: 47.432111,
      lng: 9.377184,
      draggable: true,
      icon: {
        url:'https://img.icons8.com/color/2x/fiat-500.png',
        scaledSize: {
          width: 30,
          height: 30
        }
      }
    }
  };

 
 
  @ViewChild(AgmMap) map: AgmMap;

  constructor(public mapsApiLoader: MapsAPILoader,
    private restService: RestService,
    private zone: NgZone,
    private wrapper: GoogleMapsAPIWrapper) {
    this.mapsApiLoader = mapsApiLoader;
    this.zone = zone;
    this.wrapper = wrapper;
    this.mapsApiLoader.load().then(() => {
    this.geocoder = new google.maps.Geocoder();
    });
  }

  currentLat: Sensor;
  currentLong: Sensor;

  getCurrentLocation(): void{
  this.restService.getLat().subscribe(currentLat => {
    console.log(currentLat.measurement.value);
    this.currentLat= currentLat});
    this.restService.getLong().subscribe(currentLong => this.currentLong= currentLong);
  }  

  ngOnInit() {
  //this.location.marker.draggable = true;
    this.getCurrentLocation();
  }


}
