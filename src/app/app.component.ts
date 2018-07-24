import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from "./services/weather-data.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = 'Wetter Wolke';
  public updateTime: Date;

  constructor(private weatherService: WeatherDataService) {
    this.weatherService.weatherChanged.subscribe(updateTs => this.updateTime = updateTs);
  }

  ngOnInit() {}

}
