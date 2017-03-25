import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Location } from "../services/location";

@Component({
  selector: 'app-location-view',
  templateUrl: './location-view.component.html',
  styleUrls: ['./location-view.component.css']
})
export class LocationViewComponent implements OnInit {
  @Input() location:Location;
  @Output() changed = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

  onClick(newValue:boolean) {
    this.changed.emit(this.location.location);
  }


}
