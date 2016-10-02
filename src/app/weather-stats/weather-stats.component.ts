import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-stats',
  templateUrl: './weather-stats.component.html',
  styleUrls: ['./weather-stats.component.css']
})
export class WeatherStatsComponent implements OnInit {
  public kwhCaption:string;

  constructor() { }

  ngOnInit() {
  }

}
