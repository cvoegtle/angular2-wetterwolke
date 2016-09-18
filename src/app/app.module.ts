import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { MdCardModule } from '@angular2-material/card';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdListModule } from '@angular2-material/list/list';

import { AppComponent } from "./app.component";
import { WeatherDataService } from "./weather-data.service";
import { WeatherDataListComponent } from "./weather-data-list/weather-data-list.component";
import { WeatherDataViewComponent } from "./weather-data-view/weather-data-view.component";
import { DateFormat } from "./pipe.date-format";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdCardModule,
    MdToolbarModule,
    MdSidenavModule,
    MdListModule
  ],
  declarations: [
    AppComponent,
    WeatherDataListComponent,
    WeatherDataViewComponent,
    DateFormat
  ],
  providers: [
    WeatherDataService,
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
