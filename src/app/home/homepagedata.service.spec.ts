import { TestBed } from '@angular/core/testing';

import { HomepageDataService } from './homepagedata.service';

describe('HomepageDataService', () => {
  let service: HomepageDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomepageDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
