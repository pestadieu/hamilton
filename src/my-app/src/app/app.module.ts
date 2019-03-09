import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { MapComponent } from './components/map/map.component';
import { PlayerComponent } from './components/player/player.component';
import { NotificationComponent } from './components/notification/notification.component';
<<<<<<< HEAD
import { HvacComponent } from './components/hvac/hvac.component';
=======
import { NavbarComponent } from './components/navbar/navbar.component';
>>>>>>> 469ac65fd4f6e60c8b409f1c2bf482604a3d2a29

 
enableProdMode();
@NgModule({
  declarations: [
    AppComponent, 
<<<<<<< HEAD
    MapComponent, PlayerComponent, NotificationComponent, HvacComponent
=======
    MapComponent, PlayerComponent, NotificationComponent, NavbarComponent
>>>>>>> 469ac65fd4f6e60c8b409f1c2bf482604a3d2a29
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
