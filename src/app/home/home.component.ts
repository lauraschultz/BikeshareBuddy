import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StationStatus, StationInfo } from '../response-interfaces';
import { BikeshareDataService } from '../bikeshare-data.service';
import { map, mergeMap, tap } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';
import { System } from '../system.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userInfo: firebase.User;
  userData: SystemData[] = [];

  systems = {};

  constructor(
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private bikeshareDataService: BikeshareDataService
    ) { }

  ngOnInit(): void {
    // console.log(this.authenticationService.userDetails);
    if(!this.authenticationService.isLoggedIn()) {   
      this.router.navigate(['search']);
    } else {
      this.userInfo = this.authenticationService.userDetails;
      this.authenticationService.getUserData().subscribe(d => {
        this.createUserSavedData(d);
      });
    }
  }

  goToMap(sys: System):void {
    this.bikeshareDataService.setSelectedSystem(sys);
    this.router.navigate(['map', sys.systemID])
  }

  createUserSavedData(obj: any): void {
    for (let [key, value] of Object.entries(obj)) {
      // for each system
      let sysData = new SystemData({stations: []});
      this.getSystemFromId(key).pipe(
        mergeMap(s => forkJoin(this.bikeshareDataService.getStationInfo(s), this.bikeshareDataService.getStationStatus(s))
                        .pipe(map(systemData => {
                          sysData.name = s.systemName;
                          for (let [station, _] of Object.entries(value)){
                            sysData.stations.push( new StationData({
                                    name: systemData[0].filter(s => s.station_id === station)[0].name,
                                    displayHtml: this.bikeshareDataService.generateInfoWindowHTML(systemData[1].filter(x => x.station_id === station)[0], s.systemID)
                                  }));
                            // this.bikeshareDataService.generateInfoWindowHTML(systemData[1].filter(x => x.station_id === station)[0], s.systemID)
                            //   .then(html => {
                            //     sysData.stations.push( new StationData({
                            //       name: systemData[0].filter(s => s.station_id === station)[0].name,
                            //       displayHtml: html
                            //     }));
                            //   });
                          }
                          return sysData;
                        })))).subscribe(x => this.userData.push(x));
      }
  }
   
  getSystemFromId(sysID: string):Observable<System> {
    return this.bikeshareDataService.getSystemByID(sysID);
  }

  // getStationInfo(sysID: string, stationID: string):

  // getStationStatus(sysID: string, stationID: string): StationStatus {
  //   const results = this.systems[sysID].filter(station => station.station_id === stationID);
  //   return (results.length == 0 ? undefined : results[0]);
  // }
}

export class SystemData {
  name: string;
  stations: StationData[];

  public constructor(init?:Partial<SystemData>) {
    Object.assign(this, init);
}
}

export class StationData {
  name: string;
  displayHtml: string;

  public constructor(init?:Partial<StationData>) {
    Object.assign(this, init);
}
}