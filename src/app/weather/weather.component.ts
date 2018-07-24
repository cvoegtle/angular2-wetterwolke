import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { WeatherDataService } from "../services/weather-data.service";
import { WeatherData } from "../services/weather-data";
import { Observable, interval } from "rxjs";
import { ConfigurationService } from "../services/configuration.service";
import { Location } from "../services/location";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public locations: Location[];
  public weatherDataList: WeatherData[];

  public errorMessage: string;
  @Output() updateEvent = new EventEmitter();

  constructor(private weatherService: WeatherDataService,
     private configurationService: ConfigurationService) {}

  ngOnInit() {
    this.fetchLocations();
  }

  private fetchLocations() {
    this.configurationService.fetchConfiguration().subscribe(configuration => this.locations = configuration.locations,
        error => this.errorMessage = <any>error, () => this.locationsReceived());
  }

  private locationsReceived() {
    this.fetchWeatherData();
    interval(180000).subscribe(() => this.fetchWeatherData());
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
