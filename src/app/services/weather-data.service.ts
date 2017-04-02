import { Injectable, EventEmitter } from "@angular/core";
import { WeatherData } from "./weather-data";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { WeatherStats } from "./weather-stats";
import { CookieService } from "./cookie.service";

@Injectable()
export class WeatherDataService {
  private weatherUrl: string = 'http://wettercentral.appspot.com/weatherstation/read?utf8&new&secret=';

  public weatherChanged = new EventEmitter<Date>();

  constructor(private http: Http, private cookieService: CookieService) {
  }

  fetchWeatherStats(location:string):Observable<WeatherStats[]> {
    this.weatherChanged.emit(new Date());
    return this.http.get(this.getStatsUrl(location)).map(this.extractData)
        .catch(this.handleError);
  }

  fetchWeatherData(): Observable<WeatherData[]> {
    this.weatherChanged.emit(new Date());
    return this.http.get(this.getActiveUrl()).map(this.extractData)
        .catch(this.handleError);
  }

  private getActiveUrl():string {
    let secret: string = this.cookieService.getCodeword();
    return this.weatherUrl + secret + "&locations=" + this.cookieService.getActiveLocations();
  }

  private getStatsUrl(location:string) {
    return this.weatherUrl + "&type=stats&locations=" +location;
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
