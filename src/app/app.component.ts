import { Component, OnInit, ViewChild, ViewEncapsulation, Input } from '@angular/core';
import { BikeshareDataService } from './bikeshare-data.service';
import { Feed, StationInfo, StationStatus } from './response-interfaces';
import {} from 'googlemaps';
import { Marker } from './marker.Model';
import { System } from './system.model';
import { backgrounds } from './images';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BikeshareBuddy';
  photoId: number;

  constructor(private authenticationService: AuthenticationService){}

onResize():void {
  if(window.innerWidth>=600){
      document.getElementById('content').style.backgroundImage = "url('"+ backgrounds[this.photoId].url+"')";
      document.getElementById('attribution').innerHTML = 
        '<i class="material-icons" style="font-size:small">panorama</i>&nbsp;Background image: '+
        '<a style="color: var(--navbar-dark);text-decoration: none;border-bottom: 1.5px solid;padding: 0px 2px;" target="_blank" href="'+
        backgrounds[this.photoId].hyperlink+'">'+
        backgrounds[this.photoId].attribution+
        '</a>';
    } else {
      document.getElementById('content').style.backgroundImage = 'var(--background-gradient)';
    }
}

isLoggedIn():boolean {
  return this.authenticationService.isLoggedIn();
}

  ngOnInit(): void {
    this.photoId = Math.floor(Math.random()*backgrounds.length);
    this.onResize();
  }
  
}
