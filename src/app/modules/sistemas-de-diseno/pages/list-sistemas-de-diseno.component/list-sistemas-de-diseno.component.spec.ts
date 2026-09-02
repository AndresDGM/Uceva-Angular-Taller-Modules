import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { ListSistemasDeDisenoComponent } from './list-sistemas-de-diseno.component';
import { TableSistemasDeDisenoComponent } from '../../components/table-sistemas-de-diseno.component/table-sistemas-de-diseno.component';
import { SistemasDeDisenoService } from '../../services/sistemas-de-diseno.service';

describe('ListSistemasDeDisenoComponent', () => {
  let component: ListSistemasDeDisenoComponent;
  let fixture: ComponentFixture<ListSistemasDeDisenoComponent>;
  let service: SistemasDeDisenoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListSistemasDeDisenoComponent, TableSistemasDeDisenoComponent],
      providers: [SistemasDeDisenoService]
    })
    .compileComponents();

    service = TestBed.inject(SistemasDeDisenoService);
    fixture = TestBed.createComponent(ListSistemasDeDisenoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('debería manejar el error cuando getAll del servicio falla', () => {
    const spyError = jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(service, 'getAll').mockReturnValue(throwError(() => new Error('Error de prueba')));
    
    fixture.detectChanges();
    
    expect(spyError).toHaveBeenCalled();
    spyError.mockRestore();
  });
});
