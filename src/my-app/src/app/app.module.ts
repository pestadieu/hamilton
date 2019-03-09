import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { MapComponent } from './map/map.component';
import { PlayerComponent } from './components/player/player.component';
import { NotificationComponent } from './components/notification/notification.component';

 
enableProdMode();
@NgModule({
  declarations: [
    AppComponent, 
    MapComponent, PlayerComponent, NotificationComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBBzvSR3OxSELz8vin0qnPwQgYlPHHCIdc'}),
    FormsModule,
    NgbModule.forRoot(),
    HttpModule
  ],
  providers: [GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})

export class AppModule { }
