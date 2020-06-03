import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { StationInfo, StationStatus } from '../response-interfaces';
import { BikeshareDataService } from '../bikeshare-data.service';
import { Marker } from '../marker.Model';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AuthenticationService } from '../authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Output() switchToSearch  = new EventEmitter<boolean>()
  title = 'bikeshare';
  private info_window = new google.maps.InfoWindow({content: ''});
  openInfoWindowID: string;
  isFave: boolean;
  @ViewChild('map', {static:true}) mapElement: any;
  map: google.maps.Map;
  markers = {};
  infoWindows = {};
  pageLoading = true;
  showErrorCard = false;

  constructor(private bikeshareDataService: BikeshareDataService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar){}

  ngOnInit(): void{
    if(!this.bikeshareDataService.getSelectedSystem()){
      // current system not set
      this.bikeshareDataService.getSystemByID(this.route.snapshot.paramMap.get('systemID'))
        .subscribe(sys => {
          this.bikeshareDataService.setSelectedSystem(sys);
          this.getStationInfo();
        });
    } else {
      this.getStationInfo();
    }

    if(this.authenticationService.isLoggedIn()) {  
      this.authenticationService.getUserData().subscribe();
    }
  }


  calculateCenter(): number[] {
    let lat = 0;
    let lng = 0;
    let counter = 0;
    this.bikeshareDataService.mapStationInfoArr.forEach(station => {
      lat += station.lat;
      lng += station.lon;
      counter ++;
    })
    return [lat/counter, lng/counter];
  }

  generateMap(){
    const center = this.calculateCenter();
    const mapProperties = {
      center: new google.maps.LatLng(center[0], center[1]),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
  }

  addMarkers(){
    let markerProperties = {
      map: this.map
      // icon: '../../assets/place-24px.png'
    }
    this.bikeshareDataService.mapStationInfoArr.forEach(station => 
        {
          markerProperties['position'] = new google.maps.LatLng(station.lat, station.lon);
          this.markers[station.station_id] = new Marker(station.name, new google.maps.Marker(markerProperties));   
    });
  }

  handleStar(): void {
    if(!this.authenticationService.isLoggedIn()){
      this.openSnackBar('You must be signed in to add a station to your favorites', 'Dismiss');
    } else {
      this.authenticationService.changeFavorite(this.bikeshareDataService.getSelectedSystem().systemID, this.openInfoWindowID)
      .then(x => {
        this.isFave = x;
        const message = (x ? 'The station has been added to your favorites' : 'The station has been removed from your favorites');
        this.openSnackBar(message, 'Dismiss');
    });
    }
    
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  addInfoWindows(){
    this.bikeshareDataService.mapStationStatusArr.forEach(station => 
      {
        let marker = this.markers[station.station_id];
        if(marker){  
          // var _this = this;
          // this.infoWindows[station.station_id] = new google.maps.InfoWindow({
          //   content:this.generateInfoWindowHTML(marker.name, station)
          // });
          google.maps.event.addListener(marker.marker, 'click', () => {
              this.info_window.close();
              this.info_window.setContent(this.generateInfoWindowHTML(marker.name, station));
              this.info_window.open(this.map, marker.marker);
              this.openInfoWindowID = station.station_id;

              google.maps.event.addListener(this.info_window, 'closeclick', () => {
                this.openInfoWindowID = undefined;
              });

              this.isFavorite(this.openInfoWindowID).then(x => {
                this.isFave = x;
              });

            // // if(document.querySelector('#button')){
            //   document.querySelector('#button')
            //   .addEventListener('click', () => {
            //     this.handleStar(station.station_id);
            //     //this.generateInfoWindowHTML(marker.name, station);
            //   });
            // // }
            
            });
        }
      });


      // this.waitForElementToDisplay('#button', 500);

      // google.maps.event.addListener(this.info_window, 'domready', () => {
        
    // });
  }

  findName(stationID: string): string {
    return this.bikeshareDataService.findName(stationID);
  }

  isFavorite(stationID: string):Promise<boolean> {
    return this.authenticationService.isFavorite(this.bikeshareDataService.getSelectedSystem().systemID, stationID);
  }

  generateInfoWindowHTML(title: string, station: StationStatus): string {
    return '<div class="infoWindow"><h3>'+title+'</h3>'+this.bikeshareDataService.generateInfoWindowHTML(station)+'</div>';
  }

  getStationInfo(): void {
    this.bikeshareDataService.getStationInfo()
      .subscribe(x =>
        {
          if(x === []){
            this.handleError();
          } else {
              if(!this.map){
                this.generateMap();
              }
              this.getStationStatus();
          }
        },
        err => this.handleError());
  }

  getStationStatus(): void {
    this.bikeshareDataService.getStationStatus()
      .subscribe(x => 
        {
          this.addMarkers();
          this.addInfoWindows();
          this.pageLoading = false;
        },
        err => this.handleError());
  }

  handleError() {
    this.pageLoading = false;
    this.showErrorCard = true;
  }
}

export class StationDockInfo {
  full: number;
  extraFull: number;
  empty: number;
  extraEmpty: number;

    public constructor(init?:Partial<StationDockInfo>) {
      Object.assign(this, init);
  }
}