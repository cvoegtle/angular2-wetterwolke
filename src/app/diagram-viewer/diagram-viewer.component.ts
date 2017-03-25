import { Component, Input, OnInit } from '@angular/core';
import { Diagram } from "../services/diagram";

@Component({
  selector: 'app-diagram-viewer',
  templateUrl: './diagram-viewer.component.html',
  styleUrls: ['./diagram-viewer.component.css']
})
export class DiagramViewerComponent implements OnInit {
  @Input() diagrams: Diagram[];
  private time:Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  makeUnique(url:string):string {
    return url+"&unique=" + this.time;
  }

}
