import { Component, OnInit, ViewChild, ViewEncapsulation, Input } from '@angular/core';
import { BikeshareDataService } from './bikeshare-data.service';
import { Feed, StationInfo, StationStatus } from './response-interfaces';
import {} from 'googlemaps';
import { Marker } from './marker.Model';
import { System } from './system.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'bikeshare';
  _mapToggle = false;

  
}
