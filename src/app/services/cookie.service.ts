import { Injectable } from "@angular/core";
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class CookieService {
  private activeLocationsCookie: string = "activeLocations";

  constructor() {
  }

  public getActiveLocations(): string {
    let activeLocations = Cookie.get(this.activeLocationsCookie);
    if (activeLocations == null || activeLocations == "") {
      activeLocations = "tegelweg8,herzo,ochsengasse,shenzhen";
    }
    return activeLocations;
  }

  public setActiveLocations(activeLocations:string): void {
    Cookie.set(this.activeLocationsCookie, activeLocations, 180);
  }
}
