import { Injectable, OnInit } from '@angular/core';
import { BikeshareDataService } from './bikeshare-data.service';
import { System } from './system.model';

@Injectable({
  providedIn: 'root'
})
export class LiveSearchService{
  constructor(private bikeshareDataService: BikeshareDataService) { }

  match(system: System, str: string):boolean {
    str = str.toLowerCase()
    return system.location.toLowerCase().startsWith(str) || system.systemName.toLowerCase().startsWith(str);
  }

  getAllMatches(search:string): System[]{
    return this.bikeshareDataService.getAllSystems().filter(sys => this.match(sys, search));
  }

  

}
