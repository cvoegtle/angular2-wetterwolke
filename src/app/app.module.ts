import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { WeatherDataService } from "./weather-data.service";
import { WeatherDataListComponent } from "./weather-data-list/weather-data-list.component";
import { WeatherDataViewComponent } from "./weather-data-view/weather-data-view.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    WeatherDataListComponent,
    WeatherDataViewComponent
  ],
  providers: [
    WeatherDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
