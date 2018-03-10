import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { Configuration } from "./configuration";

@Injectable()
export class ConfigurationService {
  private configuration: Observable<Configuration>;

  constructor(private http: HttpClient) {
  }

  fetchConfiguration(): Observable<Configuration> {
    if (this.configuration == null) {
      this.configuration = this.http.get("./configuration.json").pipe()
          .catch(this.handleError);
    }
    return this.configuration;
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }


}
