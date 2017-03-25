import { Component, OnInit, Input } from '@angular/core';
import { WeatherData } from "../services/weather-data";
import { Location } from "../services/location";

@Component({
  selector: 'app-weather-data-view',
  templateUrl: 'weather-data-view.component.html',
  styleUrls: ['weather-data-view.component.css']
})
export class WeatherDataViewComponent implements OnInit {
  @Input() weatherData: WeatherData;
  public expanded:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.expanded = !this.expanded;
  }

  isLate():boolean {
    let now:number = Date.now();
    let timestamp:number = Date.parse(this.weatherData.timestamp);
    return (now - timestamp) > 60*20*1000;
  }

  showForecast() {
    window.open(this.weatherData.locationObj.weatherForecast);
  }
}
