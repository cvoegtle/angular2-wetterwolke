import { Component, OnInit } from "@angular/core";
import { Diagram } from "../services/diagram";
import { ConfigurationService } from "../services/configuration.service";
import { ActivatedRoute } from "@angular/router";
import { Configuration } from "../services/configuration";

@Component({
  selector: 'app-app-diagram',
  templateUrl: './app-diagram.component.html',
  styleUrls: ['./app-diagram.component.css']
})
export class AppDiagramComponent implements OnInit {
  public diagrams: Diagram[];
  public image: number;
  public errorMessage: string;

  constructor(private configurationService: ConfigurationService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    let location = this.route.snapshot.params['location'];
    this.image = this.route.snapshot.params['image'];
    this.fetchDiagrams(location);
  }

  private fetchDiagrams(location: string) {
    this.configurationService.fetchConfiguration()
        .subscribe(configuration => this.fetchDiagramsFromConfiguration(configuration, location),
            error => this.errorMessage = <any>error);
  }

  private fetchDiagramsFromConfiguration(configuration: Configuration, location: string) {
    if (!location || location == 'global') {
      this.diagrams = configuration.diagrams;
    } else {
      for (let current of configuration.locations) {
        if (current.location == location) {
          this.diagrams = current.diagrams;
          break;
        }
      }
    }

  }

}
