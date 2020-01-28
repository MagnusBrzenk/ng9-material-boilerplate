import { TestBed } from '@angular/core/testing';

import { TestDataService } from './test-data.service';

describe('DataService', () => {
  let service: TestDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
