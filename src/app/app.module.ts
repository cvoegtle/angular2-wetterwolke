import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import {MaterialModule} from '@angular/material';

import { AppComponent } from "./app.component";
import { WeatherDataService } from "./weather-data.service";
import { WeatherDataListComponent } from "./weather-data-list/weather-data-list.component";
import { WeatherDataViewComponent } from "./weather-data-view/weather-data-view.component";
import { DateFormat } from "./pipe.date-format";
import { WeatherComponent } from './weather/weather.component';
import { SettingsComponent } from './settings/settings.component';
import { routing, appRoutingProviders } from "./app.routing";
import { LocationViewComponent } from './settings/location-view.component';
import { LocationService } from "./settings/location.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    routing
  ],
  declarations: [
    AppComponent,
    WeatherDataListComponent,
    WeatherDataViewComponent,
    DateFormat,
    WeatherComponent,
    SettingsComponent,
    LocationViewComponent,
  ],
  providers: [
    WeatherDataService,
    LocationService,
    appRoutingProviders
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
