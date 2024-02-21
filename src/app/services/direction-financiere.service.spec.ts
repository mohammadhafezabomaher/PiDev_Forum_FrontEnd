import { TestBed } from '@angular/core/testing';

import { DirectionFinanciereService } from './direction-financiere.service';

describe('DirectionFinanciereService', () => {
  let service: DirectionFinanciereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectionFinanciereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
