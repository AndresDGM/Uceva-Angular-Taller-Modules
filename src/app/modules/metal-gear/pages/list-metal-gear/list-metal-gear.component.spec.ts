import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { PERSONAJES_METAL_GEAR } from '../../../../core/config/personajes-metal-gear.config';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { TableMetalGearComponent } from '../../components/table-metal-gear/table-metal-gear.component';
import { MetalGearService } from '../../services/metal-gear.service';
import { ListMetalGearComponent } from './list-metal-gear.component';

describe('ListMetalGearComponent', () => {
  let component: ListMetalGearComponent;
  let fixture: ComponentFixture<ListMetalGearComponent>;
  let metalGearService: MetalGearService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListMetalGearComponent, TableMetalGearComponent, BadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMetalGearComponent);
    component = fixture.componentInstance;
    metalGearService = TestBed.inject(MetalGearService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllPersonajes al iniciar', () => {
    const spyGetAllPersonajes = jest
      .spyOn(metalGearService, 'getAllPersonajes')
      .mockReturnValue(of(PERSONAJES_METAL_GEAR));
    fixture.detectChanges();
    expect(spyGetAllPersonajes).toHaveBeenCalled();
  });

  it('debería asignar los personajes recibidos del servicio', () => {
    jest.spyOn(metalGearService, 'getAllPersonajes').mockReturnValue(of(PERSONAJES_METAL_GEAR));
    fixture.detectChanges();
    expect(component.personajes).toEqual(PERSONAJES_METAL_GEAR);
  });

  it('debería pasar los personajes al componente table-metal-gear', () => {
    jest.spyOn(metalGearService, 'getAllPersonajes').mockReturnValue(of(PERSONAJES_METAL_GEAR));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(TableMetalGearComponent))
      .componentInstance;
    expect(tableComponent.personajes).toEqual(PERSONAJES_METAL_GEAR);
  });

  it('debería manejar el error cuando falla getAllPersonajes', () => {
    component.personajes = [];
    const errorResponse = new Error('Error al cargar personajes');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(metalGearService, 'getAllPersonajes').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(metalGearService.getAllPersonajes).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.personajes.length).toBe(0);
  });
});
