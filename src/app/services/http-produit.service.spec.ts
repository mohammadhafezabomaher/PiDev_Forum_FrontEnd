import { TestBed } from '@angular/core/testing';

import { HttpProduitService } from './http-produit.service';

describe('HttpProduitService', () => {
  let service: HttpProduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpProduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
