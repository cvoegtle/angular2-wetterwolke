import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from "./weather-data.service";
import { WeatherData } from "./weather-data";
import { Observable } from "rxjs/Observable";
import './rxjs-operators';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  private title = 'Wetter Wolke';
  private errorMessage: string;
  private weatherDataList: WeatherData[];
  private updateTime: Date;

  constructor(private weatherService: WeatherDataService) {}

  ngOnInit() {
    this.fetchWeatherData();
    Observable.interval(180000).subscribe(() => this.fetchWeatherData());
  }

  fetchWeatherData(): void {
    this.weatherService.fetchWeatherData().subscribe(weatherData => this.weatherDataList = weatherData,
        error => this.errorMessage = <any>error, () => this.updateTime = new Date());
  }


}
