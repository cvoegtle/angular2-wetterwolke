import { Component, OnInit } from '@angular/core';
import { WeatherData } from "../weather-data";
import { WeatherDataService } from "../weather-data.service";

@Component({
  moduleId: module.id,
  selector: 'app-weather-data-list',
  templateUrl: 'weather-data-list.component.html',
  styleUrls: ['weather-data-list.component.css']
})
export class WeatherDataListComponent implements OnInit {
  private weatherDataList: WeatherData[] = [];

  constructor(private weatherService: WeatherDataService) { }

  ngOnInit() {
    this.fetchWeatherData();
  }

  fetchWeatherData() {
    this.weatherService.fetchWeatherData().then(weatherData => this.setWeatherData(weatherData));
  }

  setWeatherData(weatherData: WeatherData[]) {
    this.weatherDataList = weatherData;
    console.error("WeatherData=" + weatherData);
  }

}
