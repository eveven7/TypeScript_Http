import { TestBed } from '@angular/core/testing';

import { RegionsServiceService } from './regions-service.service';

describe('RegionsServiceService', () => {
  let service: RegionsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegionsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
