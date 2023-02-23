import { TestBed } from '@angular/core/testing';

import { StationlistService } from './stationlist.service';

describe('StationlistService', () => {
  let service: StationlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StationlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
