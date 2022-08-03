import { Component, Input, OnInit } from '@angular/core';
import { WeatherDataService } from "../services/weather-data.service";
import { WeatherStatLine } from "../services/weather-stat-line";
import { WeatherStats } from "../services/weather-stats";

@Component({
  selector: 'app-weather-stats',
  templateUrl: './weather-stats.component.html',
  styleUrls: ['./weather-stats.css']
})
export class WeatherStatsComponent implements OnInit {
  @Input() locationId:string;
  public stats:WeatherStatLine[];
  public kwhCaption:string;
  public radiationCaption:string;


  constructor(private weatherService: WeatherDataService) { }

  ngOnInit() {
    this.weatherService.fetchWeatherStats(this.locationId).subscribe(weatherData => this.processWeatherData(weatherData));
  }

  private processWeatherData(weatherStats:WeatherStats[]) {
    this.extractStaticLines(weatherStats[0]);
    this.extractCaptions(weatherStats[0]);
  }

  private extractStaticLines(weatherStats: WeatherStats) {
    this.stats = weatherStats.stats;
  }

  private extractCaptions(weatherStats: WeatherStats) {
    if (weatherStats.kind == "withSolarRadiation") {
      this.kwhCaption = "∑ Sonne";
      this.radiationCaption = "Max Sonne";
    } else if (weatherStats.kind == "withSolarPower") {
      this.kwhCaption = "Ertrag";
      this.radiationCaption = "Max L."
    }
  }
}
