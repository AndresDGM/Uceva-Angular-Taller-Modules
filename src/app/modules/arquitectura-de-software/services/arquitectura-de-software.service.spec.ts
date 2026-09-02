import { TestBed } from '@angular/core/testing';

import { ArquitecturaDeSoftwareService } from './arquitectura-de-software.service';

describe('ArquitecturaDeSoftwareService', () => {
  let service: ArquitecturaDeSoftwareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArquitecturaDeSoftwareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
