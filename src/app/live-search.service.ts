import { Injectable, OnInit } from '@angular/core';
import { BikeshareDataService } from './bikeshare-data.service';
import { System } from './system.model';

@Injectable({
  providedIn: 'root'
})
export class LiveSearchService{
  private systems: System[] = [];
  constructor(private bikeshareDataService: BikeshareDataService) { }

  match(system: System, str: string):boolean {
    str = str.toLowerCase()
    return system.location.toLowerCase().startsWith(str) || system.systemName.toLowerCase().startsWith(str);
  }

  getAllMatches(search:string): System[]{
    return this.systems.filter(sys => this.match(sys, search));
  }

  populateSystemArray(){
    this.bikeshareDataService.all_systems().subscribe(data => {
      console.log(data);
      var items = 0;
      var lines = data.split('\n');
      lines.shift();
      lines.pop()
      lines.forEach(line => {
        line = line.replace(/"([\w\W]*),([\w\W]*)"/, "$1$2"); // remove problems with comma in the col
        const d = line.split(',');
        this.systems.splice(items, 0, new System({
          countryCode: d[0],
          systemName: d[1],
          location: d[2],
          systemID: d[3],
          discoveryUrl: d[5]
        }));
        items++;
      });
    });
  }

}
