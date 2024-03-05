import { TestBed } from '@angular/core/testing';

import { ExposantService } from './exposant.service';

describe('ExposantService', () => {
  let service: ExposantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExposantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
