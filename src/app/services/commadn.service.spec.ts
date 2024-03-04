import { TestBed } from '@angular/core/testing';

import { CommadnService } from './commadn.service';

describe('CommadnService', () => {
  let service: CommadnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommadnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
