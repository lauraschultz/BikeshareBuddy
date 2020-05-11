import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { StationInfo, StationStatus } from '../response-interfaces';
import { BikeshareDataService } from '../bikeshare-data.service';
import { Marker } from '../marker.Model';

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
  private current_system = 'BA';
  private info_window = new google.maps.InfoWindow({content: ''});
  @ViewChild('map', {static:true}) mapElement: any;
  map: google.maps.Map;
  markers = {};

  constructor(private bikeshareDataService: BikeshareDataService){}

  ngOnInit(){
    this.getStationInfo('fakeID');
  }

  generateInfoWindowHTML(title, empty, full):string {
    let newHTML = '<div class="infoWindow"><h2>'+title+'</h2>';
    for(let i=0; i<+full; i++){
      newHTML += '<span class="full"></span>';
    }
    for(let i=0; i<+empty; i++){
      newHTML += '<span class="empty"></span>';
    }
    newHTML += '</div>';
    return newHTML
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
    const center = this.calculateCenter()
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
        var _this = this;
        google.maps.event.addListener(marker.marker, 'click', function() {
          _this.info_window.close();
          _this.info_window.setContent(_this.generateInfoWindowHTML(marker.name, station.num_docks_available, station.num_bikes_available));
          _this.info_window.open(_this.map, marker.marker);
        }); 
      })
  }

  getStationInfo(sysID: string) {
    this.bikeshareDataService.station_info(sysID)
      .subscribe(x =>
        {
          console.log('got station info:', x);
          this.station_info = x;
          this.getStationStatus(sysID);
          if(!this.map){
            this.generateMap();
          }
        });
  }

  getStationStatus(sysID: string) {
    this.bikeshareDataService.station_status(sysID)
      .subscribe(x => 
        {
          console.log('got station status', x);
          this.station_status = x;
          console.log(this.station_status);
          this.addMarkers();
          this.addInfoWindows();
        });
  }
}