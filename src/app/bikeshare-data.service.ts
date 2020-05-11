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

  constructor(private http: HttpClient) { }

  bay_area_url = 'https://gbfs.baywheels.com/gbfs/gbfs.json'

  getFeedFromDiscovery(feedName): Observable<string> {
      return this.http.get(this.selectedSystem.discoveryUrl, {responseType:'json'}).pipe(
              map(x => x['data']['en']['feeds']),
              map(feeds => feeds.filter((feed: Feed)=> feed.name === feedName)[0].url)
              // map(x => this.feeds = x)
              );
  }

  setSystem(sys: System){
    console.log('system set:', sys)
    this.selectedSystem = sys;
  }

  getSystem():System {
    return this.selectedSystem;
  }

  // returns only unsanitized csv string
  all_systems(): Observable<string>{
    return this.http.get('https://raw.githubusercontent.com/NABSA/gbfs/master/systems.csv', {responseType: 'text'});
  }

  station_info(systemID): Observable<StationInfo[]> {
    return this.getFeedFromDiscovery('station_information')
        .pipe(mergeMap(feed => this.http.get(feed, {responseType:'json'})),
              map(x => x['data']['stations']));
  }

  station_status(sysID): Observable<StationStatus[]>{
    return this.getFeedFromDiscovery('station_status')
        .pipe(mergeMap(feed => this.http.get(feed, {responseType:'json'})),
              map(x => x['data']['stations']));
  }
}
