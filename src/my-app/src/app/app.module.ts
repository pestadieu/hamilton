import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { MapComponent } from './components/map/map.component';
import { PlayerComponent } from './components/player/player.component';
import { NotificationComponent } from './components/notification/notification.component';
import { HvacComponent } from './components/hvac/hvac.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WeatherComponent } from './components/weather/weather.component';

 
enableProdMode();
@NgModule({
  declarations: [
    AppComponent, 
    MapComponent, PlayerComponent, NotificationComponent, NavbarComponent, WeatherComponent, HvacComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBBzvSR3OxSELz8vin0qnPwQgYlPHHCIdc'}),
    FormsModule,
    NgbModule.forRoot(),
    HttpModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
  ],
  providers: [GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})

export class AppModule { }
