import { Component, OnInit } from "@angular/core";
import { Location } from "./location";
import { LocationService } from "./location.service";
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
    for (let i:number = 0; i < fetchedLocations.length; i++) {
      let location:Location = fetchedLocations[i];
      location.enabled = activeLocations.indexOf(location.location) >= 0;
    }
    this.locations=fetchedLocations;
  }

  onLocationChanged(locationId: string) {
    let activeLocations: string = "";
    for (let i:number = 0; i < this.locations.length; i++) {
      let location:Location = this.locations[i];
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
