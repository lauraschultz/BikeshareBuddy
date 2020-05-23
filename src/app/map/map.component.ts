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
  private current_system:string;
  private info_window = new google.maps.InfoWindow({content: ''});
  @ViewChild('map', {static:true}) mapElement: any;
  map: google.maps.Map;
  markers = {};
  pageLoading = true;
  showErrorCard = false;

  constructor(private bikeshareDataService: BikeshareDataService,private route: ActivatedRoute,
    private router: Router){}

  ngOnInit(){
    this.current_system = this.route.snapshot.paramMap.get('systemID');
    console.log('the system id is ' + this.current_system);
    if(!this.bikeshareDataService.getSelectedSystem()){
      // current system not set
      this.bikeshareDataService.setSystemByID(this.current_system).subscribe(() => this.getStationInfo());
      // console.log('now current system is ' + this.bikeshareDataService.getSelectedSystem());
    } else {
    this.getStationInfo();}
  }

  getSlots(station: StationStatus): StationDockInfo {
    const max = 15;
    const cutoff = 2;
    const total = station.num_bikes_available+station.num_docks_available;
    let empty = Math.floor((station.num_docks_available/total)*max);
    let full = Math.floor((station.num_bikes_available/total)*max);
    if((station.num_bikes_available-full) <= cutoff){
      full = station.num_bikes_available;
    }
    if((station.num_docks_available-empty) <= cutoff){
      empty = station.num_docks_available;
    }
    return new StationDockInfo({
      empty: empty,
      full: full,
      extraEmpty: station.num_docks_available - empty,
      extraFull: station.num_bikes_available - full
    })
  }

  timeFormat(date:Date):string {
    const now = new Date();
    date = new Date((+date*1000));
    const timeAgo = now.getTime() - date.getTime();
    if(timeAgo < 1000*60){              // one minute
      return '<1 minute ago';
    }
    if(timeAgo < 1000*60*60){           // one hour
      const mins = Math.floor(timeAgo/(1000*60))
      return  mins + ' min' + (mins==1 ? '' : 's') + ' ago';
    }
    if(timeAgo < 1000*60*60*24){        // one day
      const hours = Math.floor(timeAgo/(1000*60*60))
      return  hours + ' hour' + (hours==1 ? '' : 's') + ' ago';
    }
    if(timeAgo < 1000*60*60*24*30){     // one month
      const days = Math.floor(timeAgo/(1000*60*60*24))
      return  days + ' day' + (days==1 ? '' : 's') + ' ago';
    }
    if(timeAgo < 1000*60*60*24*365){    // one year
      const months = Math.floor(timeAgo/(1000*60*60*24*30))
      return  months + ' day' + (months==1 ? '' : 's') + ' ago';
    }
    const years = Math.floor(timeAgo/(1000*60*60*24*365))
    return years + ' year' + (years==1 ? '' : 's') + ' ago';
  }

  generateInfoWindowHTML(title:string, station:StationStatus):string {
    const docks = this.getSlots(station);
    let newHTML = '<div class="infoWindow"><h3>'+title+'</h3>';
    if(!(station.is_renting && station.is_returning)) {
      newHTML += '<div class="warning"><i class="material-icons">warning</i>&nbsp;Not currently ';
      if(!station.is_renting && !station.is_returning) {
        newHTML += 'renting bikes or accepting bike returns';
      } else if (!station.is_renting) {
        newHTML += 'renting bikes';
      } else {
        newHTML += 'accepting bike returns';
      }
      newHTML+= '</div>';
    }
    newHTML += '<div class="cont">';
    for(let i=0; i<docks.full; i++){
      newHTML += '<span class="full"></span>';
    }
    newHTML += (docks.extraFull>0 ? '<span class="full moretxt"><i class="material-icons">add_circle_outline</i>' + docks.extraFull + '</span>': '');
    
    for(let i=0; i<docks.empty; i++){
      newHTML += '<span class="empty"></span>';
    }
    newHTML += (docks.extraEmpty>0 ? '<span class="empty moretxt"><i class="material-icons">add_circle_outline</i>' + docks.extraEmpty + '</span>': '');
    
    newHTML += '</div><div class="footer"><div>' + station.num_bikes_available + ' available bike' + (station.num_bikes_available==1 ? '' : 's') + '</div>';
    newHTML += '<div>' + station.num_docks_available + ' available dock' + (station.num_docks_available==1 ? '' : 's') + '</div>';
    newHTML += '<div class="timestamp"><i class="material-icons">watch_later</i>&nbsp;Last updated ' + this.timeFormat(station.last_reported) + '</div></div></div>';
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
        var _this = this;
        google.maps.event.addListener(marker.marker, 'click', function() {
          _this.info_window.close();
          _this.info_window.setContent(_this.generateInfoWindowHTML(marker.name, station));
          _this.info_window.open(_this.map, marker.marker);
        }); 
      })
  }

  getStationInfo() {
    this.bikeshareDataService.getSystemFeed('station_information')
      .subscribe(x =>
        {
          // console.log('got station info:', x);
          this.station_info = x;
          this.getStationStatus();
          if(!this.map){
            this.generateMap();
          }
        },
        err => this.handleError());
  }

  getStationStatus() {
    this.bikeshareDataService.getSystemFeed('station_status')
      .subscribe(x => 
        {
          // console.log('got station status:', x);
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