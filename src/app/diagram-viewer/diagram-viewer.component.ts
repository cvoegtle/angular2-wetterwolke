import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Diagram } from "../services/diagram";

@Component({
  selector: 'app-diagram-viewer',
  templateUrl: './diagram-viewer.component.html',
  styleUrls: ['./diagram-viewer.component.css']
})
export class DiagramViewerComponent implements OnInit, OnChanges {
  @Input() diagrams: Diagram[];
  @Input() image: number;
  public index: number;
  private time:Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  makeUnique(url:string):string {
    return url+"&unique=" + this.time;
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if (propName == 'image') {
        window.setTimeout(this.setIndex, 100, this, this.image);
      }
    }
  }

  setIndex(viewer: DiagramViewerComponent, image: number) {
    if (!image) {
      image = 0;
    }
    viewer.index = image;
  }

}
