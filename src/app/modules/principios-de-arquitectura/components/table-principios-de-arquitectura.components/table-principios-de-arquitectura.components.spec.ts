import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PRINCIPIOS_DE_ARQUITECTURA } from '../../../../core/config/principios-de-arquitectura.config';
import { TablePrincipiosDeArquitecturaComponents } from './table-principios-de-arquitectura.components';

describe('TablePrincipiosDeArquitecturaComponents', () => {
  let component: TablePrincipiosDeArquitecturaComponents;
  let fixture: ComponentFixture<TablePrincipiosDeArquitecturaComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablePrincipiosDeArquitecturaComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePrincipiosDeArquitecturaComponents);
    component = fixture.componentInstance;
    component.principios = PRINCIPIOS_DE_ARQUITECTURA;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería definir el @Input principios con un valor por defecto vacío', () => {
    component.principios = [];
    expect(component.principios).toEqual([]);
  });

  it('debería renderizar una fila por cada principio', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.principios.length);
  });

  it('debería mostrar los datos del principio en cada columna', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('td'));
      const principio = component.principios[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(principio.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(principio.titulo);
      expect(columns[2].nativeElement.textContent.trim()).toBe(principio.descripcion);
      expect(columns[4].nativeElement.textContent.trim()).toBe(principio.imagenUrl);
    });
  });

  it('debería renderizar los subtemas de cada principio', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    rows.forEach((row, index) => {
      const subtemaSpans = row.queryAll(By.css('td:nth-child(4) span'));
      const principio = component.principios[index];

      expect(subtemaSpans.length).toBe(principio.subtemas.length);
      subtemaSpans.forEach((span, j) => {
        expect(span.nativeElement.textContent.trim()).toBe(principio.subtemas[j]);
      });
    });
  });
});