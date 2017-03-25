import { Component, OnInit } from '@angular/core';
import { Diagram } from "../services/diagram";
import { ConfigurationService } from "../services/configuration.service";
import { Configuration } from "../services/configuration";

@Component({
  selector: 'app-app-diagram',
  templateUrl: './app-diagram.component.html',
  styleUrls: ['./app-diagram.component.css']
})
export class AppDiagramComponent implements OnInit {
  public diagrams: Diagram[];
  public errorMessage:string;

  constructor(private configurationService: ConfigurationService) { }

  ngOnInit() {
    this.configurationService.fetchConfiguration().subscribe(configuration => this.diagrams = configuration.diagrams,
        error => this.errorMessage = <any>error);
  }

}
