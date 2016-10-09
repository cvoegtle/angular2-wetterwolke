import { Injectable } from '@angular/core';
import { Location } from "./location";
import { Observable } from "rxjs/Observable";
import { Http, Response } from "@angular/http";

@Injectable()
export class LocationService {
  private locations:Observable<Location[]>;

  constructor(private http: Http) { }

  fetchLocations(): Observable<Location[]> {
    if (this.locations == null) {
      this.locations = this.http.get("./locations.json").map(this.extractData)
          .catch(this.handleError);
    }
    return this.locations;
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
