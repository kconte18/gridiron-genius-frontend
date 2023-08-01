import { TestBed } from '@angular/core/testing';

import { GetrankingsService } from './get-rankings.service';

describe('GetrankingsService', () => {
  let service: GetrankingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetrankingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
