import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageService {
  private activeLocations: string = "activeLocations";
  private codeword: string = "codeword";

  constructor() {
  }

  public getActiveLocations(): string {
    let activeLocations = localStorage.getItem(this.activeLocations);
    if (activeLocations == null || activeLocations == "") {
      activeLocations = "tegelweg8,herzo,ochsengasse,shenzhen";
    }
    return activeLocations;
  }

  public setActiveLocations(activeLocations: string): void {
    localStorage.setItem(this.activeLocations, activeLocations);
  }

  public  getCodeword(): string {
    return localStorage.getItem(this.codeword);
  }

  public setCodeword(newWord: string) {
    localStorage.setItem(this.codeword, newWord);
  }

  public getExpanded(location: string): boolean {
    return localStorage.getItem(location) != null;
  }

  public setExpanded(location: string, expanded: boolean) {
    if (expanded) {
      localStorage.setItem(location, "expanded");
    } else {
      localStorage.removeItem(location);
    }
  }
}
