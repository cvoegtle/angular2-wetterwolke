import { Injectable, EventEmitter } from "@angular/core";
import { WeatherData } from "./weather-data";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class WeatherDataService {
  private weatherUrl: string = 'http://wettercentral.appspot.com/weatherstation/read?utf8&new&secret=&locations=';

  public weatherChanged = new EventEmitter<Date>();

  constructor(private http: Http) {
  }

  fetchWeatherData(): Observable<WeatherData[]> {
    this.weatherChanged.emit(new Date());
    return this.http.get(this.getActiveUrl()).map(this.extractData)
        .catch(this.handleError);
  }

  private getActiveUrl():string {
    let activeLocations:string = Cookie.get('activeLocations');
    if (activeLocations == null || activeLocations == "") {
      activeLocations = "tegelweg8,ochsengasse,herzo,shenzhen";
    }
    return this.weatherUrl + activeLocations;

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
