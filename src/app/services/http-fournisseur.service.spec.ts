import { TestBed } from '@angular/core/testing';

import { HttpFournisseurService } from './http-fournisseur.service';

describe('HttpFournisseurService', () => {
  let service: HttpFournisseurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpFournisseurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
