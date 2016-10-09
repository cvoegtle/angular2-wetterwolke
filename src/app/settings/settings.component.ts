import { Component, OnInit } from "@angular/core";
import { Location } from "../services/location";
import { ConfigurationService } from "../services/configuration.service";
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Configuration } from "../services/configuration";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  private locations: Location[];

  constructor(private configurationService: ConfigurationService) {
  }

  ngOnInit() {
    this.configurationService.fetchConfiguration().subscribe(fetchedConfiguration => this.processLocations(fetchedConfiguration));
  }

  private processLocations(fetchedConfiguration:Configuration) {
    let activeLocations:string = Cookie.get('activeLocations');
    let fetchedLocations:Location[] = fetchedConfiguration.locations;
    for (let location of fetchedLocations) {
      location.enabled = activeLocations.indexOf(location.location) >= 0;
    }
    this.locations=fetchedLocations;
  }

  onLocationChanged(locationId: string) {
    let activeLocations: string = "";
    for (let location of this.locations) {
      if (location.location == locationId) {
        location.enabled = !location.enabled;
      }
      if (location.enabled) {
        activeLocations += location.location+",";
      }
    }
    Cookie.set('activeLocations', activeLocations, 180);
  }
}
