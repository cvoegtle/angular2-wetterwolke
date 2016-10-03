import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from "../weather-data.service";
import { Input } from "@angular/core/src/metadata/directives";
import { WeatherStatLine } from "../weather-stat-line";
import { WeatherStats } from "../weather-stats";

@Component({
  selector: 'app-weather-stats',
  templateUrl: './weather-stats.component.html',
  styleUrls: ['./weather-stats.css']
})
export class WeatherStatsComponent implements OnInit {
  @Input() locationId:string;
  private stats:WeatherStatLine[];

  private kwhCaption:string;


  constructor(private weatherService: WeatherDataService) { }

  ngOnInit() {
    this.weatherService.fetchWeatherStats(this.locationId).subscribe(weatherData => this.processWeatherData(weatherData));
  }

  private processWeatherData(weatherStats:WeatherStats[]) {
    this.stats = weatherStats[0].stats;
    for (let i in this.stats) {
      let stat = this.stats[i];
      if (stat.hasOwnProperty("kwh")) {
        this.kwhCaption = "Ertrag";
        break;
      }
    }
  }

}
