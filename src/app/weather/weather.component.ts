import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { WeatherDataService } from "../services/weather-data.service";
import { WeatherData } from "../services/weather-data";
import { Observable } from "rxjs/Observable";
import { LocationService } from "../services/location.service";
import { Location } from "../services/location";
import { location } from "@angular/platform-browser/src/facade/browser";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  private locations: Location[];
  private weatherDataList: WeatherData[];

  private errorMessage: string;
  @Output() updateEvent = new EventEmitter();

  constructor(private weatherService: WeatherDataService,
     private locationService: LocationService) {}

  ngOnInit() {
    this.fetchLocations();
  }

  private fetchLocations() {
    this.locationService.fetchLocations().subscribe(locations => this.locations = locations,
        error => this.errorMessage = <any>error, () => this.locationsReceived());
  }

  private locationsReceived() {
    this.fetchWeatherData();
    Observable.interval(180000).subscribe(() => this.fetchWeatherData());
  }

  private fetchWeatherData(): void {
    this.weatherService.fetchWeatherData().subscribe(weatherData => this.weatherDataList = weatherData,
        error => this.errorMessage = <any>error, () => this.processWeatherData());
  }

  private processWeatherData() {
    for (let weatherData of this.weatherDataList) {
      this.addLocation(weatherData);
    }

    this.updateEvent.emit(new Date())
  }

  private addLocation(weatherData:WeatherData) {
    for (let location of this.locations) {
      if (location.location == weatherData.id) {
        weatherData.locationObj = location;
        break;
      }
    }
  }
}
