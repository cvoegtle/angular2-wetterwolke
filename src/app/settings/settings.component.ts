import { Component, OnInit } from "@angular/core";
import { Location } from "../services/location";
import { LocationService } from "../services/location.service";
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  private locations: Location[];

  constructor(private locationService: LocationService) {
  }

  ngOnInit() {
    this.locationService.fetchLocations().subscribe(fetchedLocations => this.processLocations(fetchedLocations));
  }

  private processLocations(fetchedLocations:Location[]) {
    let activeLocations:string = Cookie.get('activeLocations');
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
