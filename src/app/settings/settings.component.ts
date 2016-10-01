import { Component, OnInit } from '@angular/core';
import { Location } from "./location";
import { LocationService } from "./location.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  private locations: Location[];

  constructor(private locationService:LocationService) { }

  ngOnInit() {
    this.locationService.fetchLocations().subscribe(fetchedLocations => this.locations = fetchedLocations);
  }

}
