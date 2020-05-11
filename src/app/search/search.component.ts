import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LiveSearchService } from '../live-search.service';
import { System } from '../system.model';
import { BikeshareDataService } from '../bikeshare-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() switchToMap  = new EventEmitter<boolean>()
  searchResults: System[];

  constructor(private liveSearchService: LiveSearchService,
    private bikeshareDataService: BikeshareDataService) { }

  ngOnInit(): void {
    this.liveSearchService.populateSystemArray();
    // console.log(this.liveSearchService.getAllMatches('careem'));
    // console.log(this.liveSearchService.match(new System({
    //   systemName: 'Test',
    //   location: 'whatever'
    // }), 'test'))
  }

  runSearch(event: any){
    this.searchResults = this.liveSearchService.getAllMatches(event.target.value);
  }

  setSystem(sys:System) {
    this.bikeshareDataService.setSystem(sys);
  }

  continue() {
    if(this.bikeshareDataService.getSystem()){
      this.switchToMap.emit(true);
    }
  }

}
