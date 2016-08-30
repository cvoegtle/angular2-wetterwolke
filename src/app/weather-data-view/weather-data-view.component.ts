import { Component, OnInit, Input } from '@angular/core';
import { WeatherData } from "../weather-data";

@Component({
  moduleId: module.id,
  selector: 'app-weather-data-view',
  templateUrl: 'weather-data-view.component.html',
  styleUrls: ['weather-data-view.component.css']
})
export class WeatherDataViewComponent implements OnInit {
  @Input() weatherData: WeatherData;

  constructor() { }

  ngOnInit() {
  }

}
