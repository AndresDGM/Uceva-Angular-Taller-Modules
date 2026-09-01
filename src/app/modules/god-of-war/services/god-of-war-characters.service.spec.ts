import { TestBed } from '@angular/core/testing';
import { GOD_OF_WAR_CHARACTERS } from '../../../core/config/god-of-war.config';
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

  it('getAllCharacters debería retornar un observable con los personajes', (done) => {
    service.getAllCharacters().subscribe(characters => {
      expect(characters).toEqual(GOD_OF_WAR_CHARACTERS);
      expect(characters.length).toBe(GOD_OF_WAR_CHARACTERS.length);
      done();
    });
  });
});