import { Injectable } from "@angular/core";
import { WeatherData } from "./weather-data";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class WeatherDataService {
  private weatherUrl: string = 'http://wettercentral.appspot.com/weatherstation/read?utf8&new&locations=tegelweg8,bali,forstweg17,ochsengasse,leoxity,elb,herzo,shenzhen&secret=';

  constructor(private http: Http) {
  }

  fetchWeatherData(): Observable<WeatherData[]> {
    return this.http.get(this.weatherUrl).map(this.extractData)
        .catch(this.handleError);
  }

  private extractData(response: Response) {
    let body = response.json();
    return body || {};
  }

  private handleError(error: any)  {
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);  }

}
