import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BikeshareDataService } from '../bikeshare-data.service';
import { map, mergeMap, tap } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';
import { System } from '../system.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  userInfo: firebase.User;
  userData: SystemData[] = [];
  pageLoading = true;

  constructor(
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private bikeshareDataService: BikeshareDataService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if (!this.authenticationService.isLoggedIn()) {
      this.router.navigate(['search']);
    } else {
      this.userInfo = this.authenticationService.userDetails;
      this.authenticationService.getUserData().subscribe((d) => {
        this.createUserSavedData(d);
      });
    }
  }

  handleStar(system: SystemData, station: StationData) {
    this.authenticationService
      .changeFavorite(system.system.systemID, station.id)
      .then((x) => {
        const message = x
          ? 'The station has been added to your favorites'
          : 'The station has been removed from your favorites';
        this.snackBar.open(message, 'Dismiss', {
          duration: 3000,
        });
        this.userData.map(s => {
          if(s.system === system.system){
            return s.stations.map(st => {
              if(st.id === station.id){
                st.favorite = x;
              }
              return st;
            })
          }
          return s;
        })
        // this.systems[system.system.systemID].stations.map(st => {
        //   if(st.station_id === station.id){station.favorite = x;}
        // });
        // const r = this.userData.find((sys) => sys === system);
        // r.stations.forEach((st) => {
        //   if (st === station) {
        //     st.favorite = x;
        //   }
        // });
      });

  }

  goToMap(sys: System): void {
    this.bikeshareDataService.setSelectedSystem(sys);
    this.router.navigate(['map', sys.systemID]);
  }

  createUserSavedData(obj: any): void {
    for (let [key, value] of Object.entries(obj)) {
      // for each system
      let sysData = new SystemData({ stations: [] });
      this.getSystemFromId(key)
        .pipe(
          mergeMap((s) =>
            forkJoin(
              this.bikeshareDataService.getStationInfo(s),
              this.bikeshareDataService.getStationStatus(s)
            ).pipe(
              map((systemData) => {
                sysData.system = s;
                for (let [station, _] of Object.entries(value)) {
                  const result = systemData[0].filter(
                    (s) => s.station_id === station
                  )[0];
                  sysData.stations.push(
                    new StationData({
                      name: result.name,
                      id: result.station_id,
                      displayHtml: this.bikeshareDataService.generateInfoWindowHTML(
                        systemData[1].filter(
                          (x) => x.station_id === station
                        )[0],
                        s.systemID
                      ),
                      favorite: true,
                    })
                  );
                  // this.bikeshareDataService.generateInfoWindowHTML(systemData[1].filter(x => x.station_id === station)[0], s.systemID)
                  //   .then(html => {
                  //     sysData.stations.push( new StationData({
                  //       name: systemData[0].filter(s => s.station_id === station)[0].name,
                  //       displayHtml: html
                  //     }));
                  //   });
                }
                return sysData;
              })
            )
          )
        )
        .subscribe((x) => {
          this.userData.push(x);
          this.pageLoading = false;
        });
    }
  }

  getSystemFromId(sysID: string): Observable<System> {
    return this.bikeshareDataService.getSystemByID(sysID);
  }

}

export class SystemData {
  system: System;
  stations: StationData[];

  public constructor(init?: Partial<SystemData>) {
    Object.assign(this, init);
  }
}

export class StationData {
  name: string;
  id: string;
  displayHtml: string;
  favorite: boolean;

  public constructor(init?: Partial<StationData>) {
    Object.assign(this, init);
  }
}
