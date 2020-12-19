import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { WeatherDataService } from "./services/weather-data.service";
import { WeatherDataListComponent } from "./weather-data-list";
import { WeatherDataViewComponent } from "./weather-data-view";
import { DateFormat } from "./pipe.date-format";
import { WeatherComponent } from './weather/weather.component';
import { SettingsComponent } from './settings/settings.component';
import { LocationViewComponent } from './settings/location-view.component';
import { ConfigurationService } from "./services/configuration.service";
import { WeatherStatsComponent } from './weather-stats/weather-stats.component';
import { WeatherStatLineComponent } from './weather-stats/weather-stat-line.component';
import { DiagramViewerComponent } from './diagram-viewer/diagram-viewer.component';
import { AppDiagramComponent } from './app-diagram/app-diagram.component';
import { AboutComponent } from './about/about.component';
import { NumberFormatPipe } from './number-format.pipe';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LocalStorageService } from "./services/localstorage.service";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatLineModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatCheckboxModule,
    MatInputModule,
    MatLineModule,
    MatToolbarModule,
    MatSidenavModule,
    AppRoutingModule,
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
    NumberFormatPipe,
  ],
  providers: [
    WeatherDataService,
    ConfigurationService,
    LocalStorageService
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
