import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PERSONAJES_METAL_GEAR } from '../../../../core/config/personajes-metal-gear.config';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { TableMetalGearComponent } from './table-metal-gear.component';

describe('TableMetalGearComponent', () => {
  let component: TableMetalGearComponent;
  let fixture: ComponentFixture<TableMetalGearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableMetalGearComponent, BadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableMetalGearComponent);
    component = fixture.componentInstance;
    component.personajes = PERSONAJES_METAL_GEAR;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada personaje', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.personajes.length);
  });

  it('debería mostrar los datos del personaje en cada columna', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const personaje = component.personajes[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(personaje.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(personaje.nombre);
      expect(columns[2].nativeElement.textContent.trim()).toBe(personaje.alias);
      expect(columns[3].nativeElement.textContent.trim()).toBe(personaje.rol);
      expect(columns[4].nativeElement.textContent.trim()).toBe(personaje.juego);
      
    });
  });

  it('debería mapear cada rol a su BadgeType correcto', () => {
    expect(component.rolMap['Protagonista']).toBe('success');
    expect(component.rolMap['Antagonista']).toBe('danger');
    expect(component.rolMap['Aliado']).toBe('primary');
    expect(component.rolMap['Mentor']).toBe('warning');
  });
});
