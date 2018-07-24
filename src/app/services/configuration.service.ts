
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Configuration } from "./configuration";
import { catchError } from 'rxjs/operators';

@Injectable()
export class ConfigurationService {
  private configuration: Observable<Configuration>;

  constructor(private http: HttpClient) {
  }

  fetchConfiguration(): Observable<Configuration> {
    if (this.configuration == null) {
      this.configuration = this.http.get<Configuration>("./configuration.json").pipe(catchError(this.handleError));
    }
    return this.configuration;
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return observableThrowError(errMsg);
  }


}
