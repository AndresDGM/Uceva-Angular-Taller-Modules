import { TestBed } from '@angular/core/testing';

import { PrincipiosDeArquitecturaService } from './principios-de-arquitectura.service';

describe('PrincipiosDeArquitecturaService', () => {
  let service: PrincipiosDeArquitecturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrincipiosDeArquitecturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
