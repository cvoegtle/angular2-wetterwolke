import { Component, Input } from '@angular/core';
import { WeatherData } from "../weather-data";

@Component({
  moduleId: module.id,
  selector: 'app-weather-data-list',
  templateUrl: 'weather-data-list.component.html',
  styleUrls: ['weather-data-list.component.css']
})
export class WeatherDataListComponent {
  @Input() weatherDataList: WeatherData[] = [];

}
