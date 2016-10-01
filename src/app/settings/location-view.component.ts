import { Component, OnInit } from '@angular/core';
import { Location } from "./location";
import { Input } from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-location-view',
  templateUrl: './location-view.component.html',
  styleUrls: ['./location-view.component.css']
})
export class LocationViewComponent implements OnInit {
  @Input() location:Location;

  constructor() { }

  ngOnInit() {
  }

}
