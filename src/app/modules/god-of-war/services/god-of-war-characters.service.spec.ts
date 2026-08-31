import { TestBed } from '@angular/core/testing';
import { GodOfWarCharactersService } from './god-of-war-characters.service';

describe('GodOfWarCharactersService', () => {
  let service: GodOfWarCharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GodOfWarCharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
