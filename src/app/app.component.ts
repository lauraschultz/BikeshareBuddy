import { Component, OnInit, ViewChild, ViewEncapsulation, Input } from '@angular/core';
import { BikeshareDataService } from './bikeshare-data.service';
import { Feed, StationInfo, StationStatus } from './response-interfaces';
import {} from 'googlemaps';
import { Marker } from './marker.Model';
import { System } from './system.model';
import { backgrounds } from './images';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bikeshare';

makeBackground():void {
  if(window.innerWidth>=600){
      const photo_id = Math.floor(Math.random()*backgrounds.length);
      document.getElementById('content').style.backgroundImage = "url('"+ backgrounds[photo_id].url+"')";
      document.getElementById('attribution').innerHTML = 
        '<i class="material-icons" style="font-size:small">panorama</i>&nbsp;Background image: '+
        '<a target="_blank" href="'+backgrounds[photo_id].hyperlink+'">'+
        backgrounds[photo_id].attribution+
        '</a>';
    }
}

  ngOnInit(): void {
    this.makeBackground();
  }
  
}
