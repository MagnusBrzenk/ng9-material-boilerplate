import { TestBed } from '@angular/core/testing';

import { EmailerService } from './emailer.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EmailerService', () => {
  let service: EmailerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(EmailerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
