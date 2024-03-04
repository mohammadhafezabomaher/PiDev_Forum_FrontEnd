import { TestBed } from '@angular/core/testing';

import { CommadprouditService } from './commadproudit.service';

describe('CommadprouditService', () => {
  let service: CommadprouditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommadprouditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
