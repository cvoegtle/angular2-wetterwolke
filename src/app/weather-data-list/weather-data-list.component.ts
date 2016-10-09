import { Component, Input } from '@angular/core';
import { WeatherData } from "../services/weather-data";
import { Location } from "../services/location";

@Component({
  selector: 'app-weather-data-list',
  templateUrl: 'weather-data-list.component.html',
  styleUrls: ['weather-data-list.component.css']
})
export class WeatherDataListComponent {
  @Input() weatherDataList: WeatherData[] = [];
}
