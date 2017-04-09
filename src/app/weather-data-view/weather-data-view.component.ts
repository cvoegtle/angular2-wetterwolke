import { Component, Input, OnInit } from "@angular/core";
import { WeatherData } from "../services/weather-data";
import { Router } from "@angular/router";
import { LocalStorageService } from "../services/localstorage.service";

@Component({
  selector: 'app-weather-data-view',
  templateUrl: 'weather-data-view.component.html',
  styleUrls: ['weather-data-view.component.css']
})
export class WeatherDataViewComponent implements OnInit {
  @Input() weatherData: WeatherData;
  public expanded: boolean = false;

  constructor(private router: Router, private localStorage: LocalStorageService) {
  }

  ngOnInit() {
    this.expanded = this.localStorage.getExpanded(this.weatherData.id);
  }

  toggle() {
    this.expanded = !this.expanded;
    this.localStorage.setExpanded(this.weatherData.id, this.expanded);
  }

  isLate(): boolean {
    let now: number = Date.now();
    let timestamp: number = Date.parse(this.weatherData.timestamp);
    return (now - timestamp) > 60 * 20 * 1000;
  }

  showForecast() {
    window.open(this.weatherData.locationObj.weatherForecast);
  }

  gotoDiagram() {
    this.router.navigate(['/diagrams', this.weatherData.id]);
  }
}
