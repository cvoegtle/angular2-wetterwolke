import { Injectable } from "@angular/core";
import { WeatherData } from "./weather-data";
import { Http } from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class WeatherDataService {
  private mockWeatherData: WeatherData[] = [
    {
      timestamp: "Sun Aug 28 21:16:12 UTC 2016",
      id: "tegelweg8",
      location: "Paderborn",
      location_short: "PB",
      localtime: "12:32",
      temperature: 22.3,
      humidity: 65,
      forecast: "http://wetterstationen.meteomedia.de/?station=104300&wahl=vorhersage"
    }
  ];
  private weatherUrl: string = 'http://wettercentral.appspot.com/weatherstation/read?utf8&new&locations=tegelweg8,bali,forstweg17,ochsengasse,leoxity,elb,herzo,shenzhen,instant&secret=';

  constructor(private http: Http) {
  }

  fetchWeatherData(): Promise<WeatherData[]> {
//    return Promise.resolve(this.mockWeatherData);
    return this.http.get(this.weatherUrl).toPromise()
        .then(response => response.json() as WeatherData[])
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
