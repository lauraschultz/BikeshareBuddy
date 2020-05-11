import { TestBed } from '@angular/core/testing';

import { BikeshareDataService } from './bikeshare-data.service';

describe('BikeshareDataServiceService', () => {
  let service: BikeshareDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikeshareDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
