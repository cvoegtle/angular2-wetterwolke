import { Component, OnInit, ViewChild } from "@angular/core";
import { Location } from "../services/location";
import { ConfigurationService } from "../services/configuration.service";
import { Configuration } from "../services/configuration";
import { CookieService } from "../services/cookie.service";
import { MdSliderChange } from "@angular/material";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  private locations: Location[];
  private codeword: string;
  private frequency: number;
  private cookieService:CookieService = new CookieService();
  @ViewChild('secret') secretInput;

  constructor(private configurationService: ConfigurationService) {
  }

  ngOnInit() {
    this.configurationService.fetchConfiguration().subscribe(configuration => this.extractLocations(configuration));
    this.codeword = this.cookieService.getCodeword();
    this.frequency = 3;
  }

  private extractLocations(configuration:Configuration):void {
    let activeLocations:string = this.cookieService.getActiveLocations();
    let fetchedLocations:Location[] = configuration.locations;
    for (let location of fetchedLocations) {
      location.enabled = activeLocations.indexOf(location.location) >= 0;
    }
    this.locations=fetchedLocations;
  }

  onFrequencyChanged(event: MdSliderChange) {
    this.frequency = event.value;
  }

  onCodewordChanged(event: Event) {
    this.codeword = this.secretInput.value;
    this.cookieService.setCodeword(this.codeword);
  }

  onLocationChanged(locationId: string):void {
    let activeLocations: string = "";
    for (let location of this.locations) {
      if (location.location == locationId) {
        location.enabled = !location.enabled;
      }
      if (location.enabled) {
        activeLocations += location.location+",";
      }
    }
    this.cookieService.setActiveLocations(activeLocations);
  }

}
