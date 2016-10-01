import { Injectable } from '@angular/core';
import { Location } from "./location";
import { Observable } from "rxjs/Observable";
import { Http, Response } from "@angular/http";

@Injectable()
export class LocationService {

  constructor(private http: Http) { }

  fetchLocations(): Observable<Location[]> {
    return this.http.get("./locations.json").map(this.extractData)
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
