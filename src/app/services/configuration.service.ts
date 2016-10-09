import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Response } from "@angular/http";
import { Configuration } from "./configuration";

@Injectable()
export class ConfigurationService {
  private configuration:Observable<Configuration>;

  constructor(private http: Http) { }

  fetchConfiguration(): Observable<Configuration> {
    if (this.configuration == null) {
      this.configuration = this.http.get("./configuration.json").map(this.extractData)
          .catch(this.handleError);
    }
    return this.configuration;
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
