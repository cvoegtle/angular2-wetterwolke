import { Component, OnInit } from '@angular/core';
import { Diagram } from "../diagram";
import { Input } from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-diagram-viewer',
  templateUrl: './diagram-viewer.component.html',
  styleUrls: ['./diagram-viewer.component.css']
})
export class DiagramViewerComponent implements OnInit {
  @Input() diagrams: Diagram[];

  constructor() { }

  ngOnInit() {
  }

}
