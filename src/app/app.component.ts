import { Component, OnInit } from '@angular/core';
import './rxjs-operators';
import { WeatherDataService } from "./services/weather-data.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  private title: string = 'Wetter Wolke';
  private updateTime: Date;

  constructor(private weatherService: WeatherDataService) {
    this.weatherService.weatherChanged.subscribe(updateTs => this.updateTime = updateTs);
  }

  ngOnInit() {}

}
