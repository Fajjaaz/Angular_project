import { TestBed } from '@angular/core/testing';

import { FlightinfoserviceService } from './flightinfoservice.service';

describe('FlightinfoserviceService', () => {
  let service: FlightinfoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightinfoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
