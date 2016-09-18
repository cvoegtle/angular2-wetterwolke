import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { WeatherDataService } from "../weather-data.service";
import { WeatherData } from "../weather-data";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  private weatherDataList: WeatherData[];
  private errorMessage: string;
  @Output() updateEvent = new EventEmitter();

  constructor(private weatherService: WeatherDataService) {}

  ngOnInit() {
    this.fetchWeatherData();
    Observable.interval(180000).subscribe(() => this.fetchWeatherData());
  }

  fetchWeatherData(): void {
    this.weatherService.fetchWeatherData().subscribe(weatherData => this.weatherDataList = weatherData,
        error => this.errorMessage = <any>error, () => this.updateEvent.emit(new Date()));
  }

}
