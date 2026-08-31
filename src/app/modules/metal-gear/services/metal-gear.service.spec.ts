import { TestBed } from '@angular/core/testing';
import { PERSONAJES_METAL_GEAR } from '../../../core/config/personajes-metal-gear.config';
import { MetalGearService } from './metal-gear.service';

describe('MetalGearService', () => {
  let service: MetalGearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetalGearService);
  });

  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('getAllPersonajes debería retornar un observable con los personajes', (done) => {
    service.getAllPersonajes().subscribe(personajes => {
      expect(personajes).toEqual(PERSONAJES_METAL_GEAR);
      expect(personajes.length).toBe(PERSONAJES_METAL_GEAR.length);
      done();
    });
  });
});
