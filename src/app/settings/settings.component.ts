import { Component, OnInit } from "@angular/core";
import { Location } from "../services/location";
import { ConfigurationService } from "../services/configuration.service";
import { Configuration } from "../services/configuration";
import { LocalStorageService } from "../services/localstorage.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  public locations: Location[];
  public codeword: string;

  constructor(private configurationService: ConfigurationService, private localStorage: LocalStorageService) {
  }

  ngOnInit() {
    this.configurationService.fetchConfiguration().subscribe(configuration => this.extractLocations(configuration));
    this.codeword = this.localStorage.getCodeword();
  }

  private extractLocations(configuration: Configuration): void {
    let activeLocations: string = this.localStorage.getActiveLocations();
    let fetchedLocations: Location[] = configuration.locations;
    for (let location of fetchedLocations) {
      location.enabled = activeLocations.indexOf(location.location) >= 0;
    }
    this.locations = fetchedLocations;
  }

  onCodewordChanged(event) {
    this.localStorage.setCodeword(this.codeword);
  }

  onLocationChanged(locationId: string): void {
    let activeLocations: string = "";
    for (let location of this.locations) {
      if (location.location == locationId) {
        location.enabled = !location.enabled;
      }
      if (location.enabled) {
        activeLocations += location.location + ",";
      }
    }
    this.localStorage.setActiveLocations(activeLocations);
  }

}
