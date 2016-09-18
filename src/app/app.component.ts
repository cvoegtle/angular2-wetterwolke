import { Component, OnInit } from '@angular/core';
import './rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  private title = 'Wetter Wolke';
  private updateTime: Date;

  constructor() {}

  ngOnInit() {}

  weatherUpdated(updateTs: Date) {
    this.updateTime = updateTs;
  }
}
