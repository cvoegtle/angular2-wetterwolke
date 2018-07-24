
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable, EventEmitter } from "@angular/core";
import { WeatherData } from "./weather-data";
import { HttpClient } from '@angular/common/http';
import { WeatherStats } from "./weather-stats";
import { LocalStorageService } from "./localstorage.service";

@Injectable()
export class WeatherDataService {
  private weatherUrl: string = 'https://wettercentral.appspot.com/weatherstation/read?utf8&new&secret=';

  public weatherChanged = new EventEmitter<Date>();

  constructor(private http: HttpClient, private localStorage: LocalStorageService) {
  }

  fetchWeatherStats(location:string):Observable<WeatherStats[]> {
    this.weatherChanged.emit(new Date());
    return this.http.get<WeatherStats[]>(this.getStatsUrl(location)).pipe(catchError(this.handleError));
  }

  fetchWeatherData(): Observable<WeatherData[]> {
    this.weatherChanged.emit(new Date());
    return this.http.get<WeatherData[]>(this.getActiveUrl()).pipe(catchError(this.handleError));
  }

  private getActiveUrl():string {
    let secret: string = this.localStorage.getCodeword();
    return this.weatherUrl + secret + "&locations=" + this.localStorage.getActiveLocations();
  }

  private getStatsUrl(location:string) {
    return this.weatherUrl + "&type=stats&locations=" +location;
  }

  private handleError(error: any)  {
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return observableThrowError(errMsg);  }

}
