import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LiveSearchService } from '../live-search.service';
import { System } from '../system.model';
import { BikeshareDataService } from '../bikeshare-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResults: System[];
  errorSelectSystem = false;
  selectedSystem: System;

  constructor(private liveSearchService: LiveSearchService,
    private bikeshareDataService: BikeshareDataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.bikeshareDataService.retrieveSystemsArray().subscribe();
  }

  runSearch(event: any): void{
    this.searchResults = this.liveSearchService.getAllMatches(event.target.value).filter(sys => sys !== this.selectedSystem);
    if(this.selectedSystem){this.searchResults.unshift(this.selectedSystem);}    // selected always shows up first in results
  }

  handleSelect(sys: System):void {
    if(this.selectedSystem === sys){
      this.continue();
    } else {
      this.selectedSystem = sys;
    }
  }

  continue(): void {
    if(this.selectedSystem){
      // system has been selected
      this.bikeshareDataService.setSelectedSystem(this.selectedSystem);
      this.router.navigate(['map', this.bikeshareDataService.getSelectedSystem().systemID]);
    } else {
      // system has not been selected, show error
      this.errorSelectSystem = true;
    } 
  }

}
