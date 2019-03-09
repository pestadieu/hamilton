import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { MapComponent } from './map/map.component';
 
enableProdMode();
@NgModule({
  declarations: [
    AppComponent, 
    MapComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBBzvSR3OxSELz8vin0qnPwQgYlPHHCIdc'}),
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})

export class AppModule { }
