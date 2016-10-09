import { Component, Input } from '@angular/core';
import { WeatherData } from "../weather-data";
import { Location } from "../location";

@Component({
  selector: 'app-weather-data-list',
  templateUrl: 'weather-data-list.component.html',
  styleUrls: ['weather-data-list.component.css']
})
export class WeatherDataListComponent {
  @Input() weatherDataList: WeatherData[] = [];
}
