import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core/src/metadata/directives";
import { WeatherStatLine } from "../services/weather-stat-line";

@Component({
  selector: 'app-weather-stat-line',
  templateUrl: './weather-stat-line.component.html',
  styleUrls: ['./weather-stats.css']
})
export class WeatherStatLineComponent implements OnInit {
  @Input() stat: WeatherStatLine;

  constructor() {
  }

  ngOnInit() {
  }

  translate(range: string): string {
    let translatedRange;
    if (range === 'lastHour') {
      translatedRange = 'letzte Stunde';
    } else if (range === 'today') {
      translatedRange = 'heute';
    } else if (range === 'yesterday') {
      translatedRange = 'gestern';
    } else if (range === 'last7days') {
      translatedRange = '7 Tage';
    } else if (range === 'last30days') {
      translatedRange = '30 Tage';
    }
    return translatedRange;
  }

}
