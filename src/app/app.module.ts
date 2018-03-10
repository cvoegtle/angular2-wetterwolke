import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { WeatherDataService } from "./services/weather-data.service";
import { WeatherDataListComponent } from "./weather-data-list/weather-data-list.component";
import { WeatherDataViewComponent } from "./weather-data-view/weather-data-view.component";
import { DateFormat } from "./pipe.date-format";
import { WeatherComponent } from './weather/weather.component';
import { SettingsComponent } from './settings/settings.component';
import { routing, appRoutingProviders } from "./app.routing";
import { LocationViewComponent } from './settings/location-view.component';
import { ConfigurationService } from "./services/configuration.service";
import { WeatherStatsComponent } from './weather-stats/weather-stats.component';
import { WeatherStatLineComponent } from './weather-stats/weather-stat-line.component';
import { DiagramViewerComponent } from './diagram-viewer/diagram-viewer.component';
import { AppDiagramComponent } from './app-diagram/app-diagram.component';
import { AboutComponent } from './about/about.component';
import { NumberFormatPipe } from './number-format.pipe';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import 'hammerjs';
import { LocalStorageService } from "./services/localstorage.service";
import {
  MdCardModule, MdCheckboxModule, MdIconModule, MdInputModule, MdLineModule, MdListModule, MdSidenavModule,
  MdTabsModule, MdToolbarModule
} from "@angular/material";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    routing,
    MdCardModule,
    MdIconModule,
    MdListModule,
    MdTabsModule,
    MdCheckboxModule,
    MdInputModule,
    MdLineModule,
    MdToolbarModule,
      MdSidenavModule
  ],
  declarations: [
    AppComponent,
    WeatherDataListComponent,
    WeatherDataViewComponent,
    DateFormat,
    WeatherComponent,
    SettingsComponent,
    LocationViewComponent,
    WeatherStatsComponent,
    WeatherStatLineComponent,
    DiagramViewerComponent,
    AppDiagramComponent,
    AboutComponent,
    NumberFormatPipe
  ],
  providers: [
    WeatherDataService,
    ConfigurationService,
    appRoutingProviders,
    LocalStorageService
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
