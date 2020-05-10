import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { Feed, StationInfo, StationStatus } from './response-interfaces';
import { filter, map, find, mergeMap } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class BikeshareDataServiceService {
  private feeds: Observable<Feed[]>;

  constructor(private http: HttpClient) { }

  bay_area_url = 'https://gbfs.baywheels.com/gbfs/gbfs.json'

  getFeedFromDiscovery(systemID, feed_name): Observable<string> {
      return this.http.get(this.bay_area_url, {responseType:'json'}).pipe(
              map(x => x['data']['en']['feeds']),
              map(feeds => feeds.filter((feed: Feed)=> feed.name === feed_name)[0].url)
              // map(x => this.feeds = x)
              );
  }

  // getUrl(feed_name): Observable<Feed> {
  //   return from(this.getFeedsFromDiscovery('whatever')
  //       .toPromise()
  //       .then(() => this.feeds.pipe(map(feeds => feeds.filter((feed: Feed)=> feed.name === feed_name)))[0]));
  // }
    //return next(i for i in requests.get(bay_area_url).json()['data']['en']['feeds'] if i['name'] == feed_name)['url']

  all_systems(){
    return ""
  }

  station_info(systemID): Observable<StationInfo[]> {
    return this.getFeedFromDiscovery('pl', 'station_information')
        .pipe(mergeMap(feed => this.http.get(feed, {responseType:'json'})),
              map(x => x['data']['stations']));
  }
    // #todo filter station data to include only necessary info

  station_status(sysID): Observable<StationStatus[]>{
    return this.getFeedFromDiscovery('pl', 'station_status')
        .pipe(mergeMap(feed => this.http.get(feed, {responseType:'json'})),
              map(x => x['data']['stations']));
  }
}
