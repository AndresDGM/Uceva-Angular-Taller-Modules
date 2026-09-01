import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { CommonModule } from '@angular/common';

import { GOD_OF_WAR_CHARACTERS } from '../../../../core/config/god-of-war.config';
import { TableGodOfWarCharactersComponent } from '../../components/table-god-of-war-characters.component/table-god-of-war-characters.component';
import { GodOfWarCharactersService } from '../../services/god-of-war-characters.service';
import { ListGodOfWarCharacters } from './list-god-of-war-characters.component';

describe('ListGodOfWarCharactersComponent', () => {
  let component: ListGodOfWarCharacters;
  let fixture: ComponentFixture<ListGodOfWarCharacters>;
  let godOfWarCharactersService: GodOfWarCharactersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListGodOfWarCharacters, TableGodOfWarCharactersComponent],
      imports: [CommonModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListGodOfWarCharacters);
    component = fixture.componentInstance;
    godOfWarCharactersService = TestBed.inject(GodOfWarCharactersService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllCharacters al iniciar', () => {
    const spyGetAllCharacters = jest
      .spyOn(godOfWarCharactersService, 'getAllCharacters')
      .mockReturnValue(of(GOD_OF_WAR_CHARACTERS));

    fixture.detectChanges();

    expect(spyGetAllCharacters).toHaveBeenCalled();
  });

  it('debería asignar los personajes recibidos del servicio', () => {
    jest
      .spyOn(godOfWarCharactersService, 'getAllCharacters')
      .mockReturnValue(of(GOD_OF_WAR_CHARACTERS));

    fixture.detectChanges();

    expect(component.characters).toEqual(GOD_OF_WAR_CHARACTERS);
  });

  it('debería pasar los personajes al componente table-god-of-war-characters', () => {
    jest
      .spyOn(godOfWarCharactersService, 'getAllCharacters')
      .mockReturnValue(of(GOD_OF_WAR_CHARACTERS));

    fixture.detectChanges();

    const tableComponent = fixture.debugElement
      .query(By.directive(TableGodOfWarCharactersComponent))
      .componentInstance;

    expect(tableComponent.characters).toEqual(GOD_OF_WAR_CHARACTERS);
  });

  it('debería manejar el error cuando falla getAllCharacters', () => {
    component.characters = [];
    const errorResponse = new Error('Error al cargar personajes');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest
      .spyOn(godOfWarCharactersService, 'getAllCharacters')
      .mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(godOfWarCharactersService.getAllCharacters).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.characters.length).toBe(0);
  });
});