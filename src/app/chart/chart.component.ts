import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from "../services/configuration.service";
import { WeatherDataService } from "../services/weather-data.service";
import { WeatherData } from "../services/weather-data";
import { Chart, LinearTickOptions } from "chart.js";
import { Location } from "../services/location";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  private errorMessage: string;
  public locations: Location[];
  public weatherDataList: WeatherData[];

  constructor(private weatherService: WeatherDataService,
              private configurationService: ConfigurationService) {
  }

  ngOnInit() {
    this.fetchLocations();
  }

  private fetchLocations() {
    this.configurationService.fetchConfiguration().subscribe(configuration => this.locations = configuration.locations,
        error => this.errorMessage = <any>error, () => this.locationsReceived());
  }

  private locationsReceived() {
    this.fetchWeatherData();
  }

  private fetchWeatherData(): void {
    this.weatherService.fetchWeatherData().subscribe(weatherData => this.weatherDataList = weatherData,
        error => this.errorMessage = <any>error, () => this.renderChart());
  }

  private renderChart() {
    let ctx = <HTMLCanvasElement>document.getElementById("myChart");
    let myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.createLabels(),
        datasets: [{
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          label: 'Temperatur',
          yAxisID: "y-axis-1",
          data: this.createTemperature(),
          borderWidth: 1
        }, {
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          label: 'Luftfeuchtigkeit',
          yAxisID: "y-axis-2",
          data: this.createHumidity(),
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: "Aktuelle Wetterlage"
        },
        scales: {
          yAxes: [{
            type: "linear",
            display: true,
            position: "left",
            ticks: <LinearTickOptions>{
              beginAtZero: true
            },
            id: "y-axis-1",
          }, {
            type: "linear",
            display: true,
            position: "right",
            ticks: <LinearTickOptions>{
              beginAtZero: true
            },
            id: "y-axis-2",
            gridLines: {
              drawOnChartArea: false
            }
          }],
        }
      }
    });

  }

  private createLabels(): string[] {
    let labels: string[] = [];
    for (let data of this.weatherDataList) {
      labels.push(data.location);
    }
    return labels;
  }

  private createTemperature() {
    let data: number[] = [];
    for (let ds of this.weatherDataList) {
      data.push(ds.temperature);
    }
    return data;
  }

  private createHumidity() {
    let data: number[] = [];
    for (let ds of this.weatherDataList) {
      data.push(ds.humidity);
    }
    return data;
  }
}
