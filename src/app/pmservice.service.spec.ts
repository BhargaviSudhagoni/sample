import { TestBed } from '@angular/core/testing';

import { PMserviceService } from './pmservice.service';

describe('PMserviceService', () => {
  let service: PMserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PMserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
