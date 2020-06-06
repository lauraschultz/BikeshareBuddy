import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, from, of, throwError } from 'rxjs';
import { Feed, StationInfo, StationStatus } from './response-interfaces';
import { filter, map, find, mergeMap, catchError, retry, tap } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';
import { System } from './system.model';
import { StationDockInfo } from './rtdb.model';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class BikeshareDataService {
  private mapSelectedSystem: System;
  mapStationInfoArr: StationInfo[];
  mapStationStatusArr: StationStatus[];
  private allSystems: System[] = [];

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getSystemByID(sysID:string): Observable<System> {
    if(this.allSystems.length>0){
      return of(this.filterArr(sysID));
    }
    return this.retrieveSystemsArray().pipe(map(() => this.filterArr(sysID)));
  }

  private filterArr(sysID: string): System {
    const results =  this.allSystems.filter(sys => sys.systemID === sysID);
      return (results.length === 0 ? undefined : results[0]);
  }

  // getSystemByID(sysID:string): System {
  //   const results =  this.allSystems.filter(sys => sys.systemID === sysID);
  //     return (results.length === 0 ? undefined : results[0]);
  // }

  getStationInfo(sys?: System): Observable<StationInfo[]> {
    if(!sys || sys === this.mapSelectedSystem) {
      if(this.mapStationInfoArr) {
        return of(this.mapStationInfoArr)
      } else {
        return this.getFeedFromDiscovery(this.mapSelectedSystem.discoveryUrl, 'station_information').pipe(
          tap(x => this.mapStationInfoArr = x));
      }
    }
    return this.getFeedFromDiscovery(sys.discoveryUrl, 'station_information');
  }

  getStationStatus(sys?: System): Observable<StationStatus[]> {
    if(!sys || sys === this.mapSelectedSystem) {
      if(this.mapStationStatusArr) {
        return of(this.mapStationStatusArr)
      } else {
        return this.getFeedFromDiscovery(this.mapSelectedSystem.discoveryUrl, 'station_status').pipe(
          tap(x => this.mapStationStatusArr = x));
      }
    }
    return this.getFeedFromDiscovery(sys.discoveryUrl, 'station_status');
  }

   getFeedFromDiscovery(discUrl: string, feedName: string): Observable<any> {
      return this.http.get(discUrl, {responseType:'json'}).pipe(
              map(x => x['data']['en']['feeds']),
              map(feeds => {
                const result = feeds.filter((feed: Feed) => feed.name === feedName);
                return (result.length>0 ? result[0].url : undefined);}
              ))
              .pipe(mergeMap(feedUrl => this.http.get(feedUrl, {responseType:'json'})),
              map(x => x['data']['stations']));
  }

  setSelectedSystem(sys: System){
    if(sys !== this.mapSelectedSystem){
      this.mapSelectedSystem = sys;
      this.mapStationStatusArr = undefined;
      this.mapStationInfoArr = undefined;
    }
  }

  getSelectedSystem():System {
    return this.mapSelectedSystem;
  }

  // getAllSystems(): System[] {
  //   return this.allSystems;
  // }

  // returns only unsanitized csv string
  private getAllSystemsCsv(): Observable<string>{
    return this.http.get('https://raw.githubusercontent.com/NABSA/gbfs/master/systems.csv', {responseType: 'text'});
  }

getAllSystems(){
  return this.allSystems;
}

  retrieveSystemsArray(): Observable<System[]> {
    // let allSystems = [];
    return this.getAllSystemsCsv().pipe(
      map(data => data.split('\n').slice(1, -1)),
      map(lines => lines.map(line => {
        const d = line.replace(/"([\w\W]*),([\w\W]*)"/, "$1$2").split(',');
        return new System({
              countryCode: d[0],
              systemName: d[1],
              location: d[2].replace('"', ''),
              systemID: d[3],
              discoveryUrl: d[5]
            });
        
      }))).pipe(map(sysArr => this.allSystems = sysArr));
  }

  findName(stationID: string): string {
    return this.mapStationInfoArr.filter(x => x.station_id === stationID)[0].name;
  }

  getSlots(station: StationStatus): StationDockInfo {
    const max = 12;
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

  generateInfoWindowHTML(station:StationStatus, sysID?: string): string {
      const docks = this.getSlots(station);
    let newHTML = '';
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
    newHTML += (docks.extraEmpty>0 ? '<span class="empty moretxt"><i class="material-icons">add_circle_outline</i>' + docks.extraEmpty + '</span>': '')
      + '</div><div class="footer"><div>' + station.num_bikes_available + ' available bike' + (station.num_bikes_available==1 ? '' : 's')
      + '</div><div>' + station.num_docks_available + ' available dock' + (station.num_docks_available==1 ? '' : 's') + '</div>'
      + '<div class="timestamp"><i class="material-icons">watch_later</i>&nbsp;Last updated ' + this.timeFormat(station.last_reported) + '</div></div>';
    return newHTML;
  }
}
