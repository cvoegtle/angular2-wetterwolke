import { Component, OnInit, Input } from '@angular/core';
import { WeatherData } from "../weather-data";

@Component({
  selector: 'app-weather-data-view',
  templateUrl: 'weather-data-view.component.html',
  styleUrls: ['weather-data-view.component.css']
})
export class WeatherDataViewComponent implements OnInit {
  @Input() weatherData: WeatherData;
  private expanded:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.expanded = !this.expanded;
  }

}
