import { Component, OnInit } from '@angular/core';
import { WeatherData } from "../weather-data";
import { WeatherDataService } from "../weather-data.service";
import '../rxjs-operators';

@Component({
  moduleId: module.id,
  selector: 'app-weather-data-list',
  templateUrl: 'weather-data-list.component.html',
  styleUrls: ['weather-data-list.component.css']
})
export class WeatherDataListComponent implements OnInit {
  private weatherDataList: WeatherData[] = [];
  private errorMessage: string;

  constructor(private weatherService: WeatherDataService) { }

  ngOnInit() {
    this.fetchWeatherData();
  }

  fetchWeatherData(): void {
    this.weatherService.fetchWeatherData().subscribe(weatherData => this.weatherDataList = weatherData,
    error => this.errorMessage = <any>error);
  }


}
