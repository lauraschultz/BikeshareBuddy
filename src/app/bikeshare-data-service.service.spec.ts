import { TestBed } from '@angular/core/testing';

import { BikeshareDataServiceService } from './bikeshare-data-service.service';

describe('BikeshareDataServiceService', () => {
  let service: BikeshareDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikeshareDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
