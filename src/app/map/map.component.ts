import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { StationInfo, StationStatus } from '../response-interfaces';
import { BikeshareDataService } from '../bikeshare-data.service';
import { Marker } from '../marker.Model';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Output() switchToSearch  = new EventEmitter<boolean>()
  title = 'bikeshare';
  private station_info: StationInfo[];
  private station_status: StationStatus[];
  private info_window = new google.maps.InfoWindow({content: ''});
  @ViewChild('map', {static:true}) mapElement: any;
  map: google.maps.Map;
  markers = {};
  pageLoading = true;
  showErrorCard = false;

  constructor(private bikeshareDataService: BikeshareDataService,private route: ActivatedRoute,
    private router: Router){}

  ngOnInit(){
    if(!this.bikeshareDataService.getSelectedSystem()){
      console.log('system not set');
      // current system not set
      this.bikeshareDataService.getSystemByID(this.route.snapshot.paramMap.get('systemID'))
        .subscribe(sys => {
          this.bikeshareDataService.setSelectedSystem(sys);
          this.getStationInfo();
        });
      // console.log('now current system is ' + this.bikeshareDataService.getSelectedSystem());
    } else {
      console.log('system set');
      this.getStationInfo();
    }
  }


  calculateCenter(): number[] {
    let lat = 0;
    let lng = 0;
    let counter = 0;
    this.station_info.forEach(station => {
      lat += station.lat;
      lng += station.lon;
      counter ++;
    })
    return [lat/counter, lng/counter];
  }

  generateMap() {
    const center = this.calculateCenter();
    const mapProperties = {
      center: new google.maps.LatLng(center[0], center[1]),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
  }

  addMarkers(){
    let markerProperties = {
      map: this.map
      // icon: '../../assets/place-24px.png'
    }
    this.station_info.forEach(station => 
        {
          markerProperties['position'] = new google.maps.LatLng(station.lat, station.lon);
          this.markers[station.station_id] = new Marker(station.name, new google.maps.Marker(markerProperties));
          
    });
  }

  addInfoWindows(){
    this.station_status.forEach(station => 
      {
        let marker = this.markers[station.station_id];
        if(marker){  
          var _this = this;
          google.maps.event.addListener(marker.marker, 'click', function() {
            _this.info_window.close();
            _this.info_window.setContent(_this.generateInfoWindowHTML(marker.name, station));
            _this.info_window.open(_this.map, marker.marker);
          }); 
        }
        
      })
  }
  generateInfoWindowHTML(title: string, station: StationStatus): string {
    return '<div class="infoWindow"><h3>'+title+'</h3>'+this.bikeshareDataService.generateInfoWindowHTML(station)+'</div>';
  }

  getStationInfo(): void {
    console.log('getStationInfo');
    this.bikeshareDataService.getStationInfo()
      .subscribe(x =>
        {
          console.log('got station info:', x);
          this.station_info = x;
          if(x === []){
            this.handleError();
          } else {
              this.getStationStatus();
              if(!this.map){
                this.generateMap();
              }
          }
        },
        err => this.handleError());
  }

  getStationStatus(): void {
    this.bikeshareDataService.getStationStatus()
      .subscribe(x => 
        {
          console.log('got station status:', x);
          this.station_status = x;
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