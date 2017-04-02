import { Injectable } from "@angular/core";
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class CookieService {
  private activeLocationsCookie: string = "activeLocations";
  private codeword: string = "codeword";

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

  public  getCodeword(): string {
    return Cookie.get(this.codeword);
  }

  public setCodeword(newWord: string) {
    Cookie.set(this.codeword, newWord, 180);
  }

  public getExpanded(location: string): boolean {
    return Cookie.get(location) != null;
  }

  public setExpanded(location: string, expanded: boolean) {
    if (expanded) {
      Cookie.set(location, "expanded", 180);
    } else {
      Cookie.delete(location);
    }
  }
}
