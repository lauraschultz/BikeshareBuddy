import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { Feed, StationInfo, StationStatus } from './response-interfaces';
import { filter, map, find, mergeMap } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';
import { System } from './system.model';


@Injectable({
  providedIn: 'root'
})
export class BikeshareDataService {
  private feeds: Observable<Feed[]>;
  private selectedSystem: System;
  private allSystems: System[] = [];

  constructor(private http: HttpClient) { }

  // return feed url of feedName from the currently selected system
  getFeedFromDiscovery(feedName): Observable<string> {
      return this.http.get(this.selectedSystem.discoveryUrl, {responseType:'json'}).pipe(
              map(x => x['data']['en']['feeds']),
              map(feeds => feeds.filter((feed: Feed)=> feed.name === feedName)[0].url)
              );
  }

  setSelectedSystem(sys: System){
    console.log('system set:', sys)
    this.selectedSystem = sys;
  }

  getSelectedSystem():System {
    return this.selectedSystem;
  }

  getAllSystems(): System[] {
    return this.allSystems;
  }

  // returns only unsanitized csv string
  getAllSystemsCsv(): Observable<string>{
    return this.http.get('https://raw.githubusercontent.com/NABSA/gbfs/master/systems.csv', {responseType: 'text'});
  }

  getStationInfo(): Observable<StationInfo[]> {
    return this.getFeedFromDiscovery('station_information')
        .pipe(mergeMap(feed => this.http.get(feed, {responseType:'json'})),
              map(x => x['data']['stations']));
  }

  getStationStatus(): Observable<StationStatus[]>{
    return this.getFeedFromDiscovery('station_status')
        .pipe(mergeMap(feed => this.http.get(feed, {responseType:'json'})),
              map(x => x['data']['stations']));
  }

  // sets selected system according to given systemID
  setSystemByID(sysID): Observable<void> {
    return this.getSystemsArray().pipe(map(sysArray => {
      console.log('allsystems is: ', this.allSystems);
      const results = this.allSystems.filter(sys => sys.systemID==sysID);
      this.selectedSystem = (results.length == 0 ? undefined : results[0]);
    }));
}

  getSystemsArray(): Observable<System[]> {
    // let allSystems = [];
    return this.getAllSystemsCsv().pipe(
      map(data => data.split('\n').slice(1, -1)),
      map(lines => lines.map(line => {
        //line = line.replace(/"([\w\W]*),([\w\W]*)"/, "$1$2"); // fix problem with comma in the location name
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
}
