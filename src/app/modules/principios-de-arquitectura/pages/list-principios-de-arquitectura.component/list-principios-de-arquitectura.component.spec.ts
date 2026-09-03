import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { PRINCIPIOS_DE_ARQUITECTURA } from '../../../../core/config/principios-de-arquitectura.config';
import { PrincipiosDeArquitecturaService } from '../../services/principios-de-arquitectura.service';
import { ListPrincipiosDeArquitecturaComponent } from './list-principios-de-arquitectura.component';

describe('ListPrincipiosDeArquitecturaComponent', () => {
  let component: ListPrincipiosDeArquitecturaComponent;
  let fixture: ComponentFixture<ListPrincipiosDeArquitecturaComponent>;
  let principiosService: PrincipiosDeArquitecturaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPrincipiosDeArquitecturaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPrincipiosDeArquitecturaComponent);
    component = fixture.componentInstance;
    principiosService = TestBed.inject(PrincipiosDeArquitecturaService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllPrincipios al iniciar', () => {
    const spyGetAllPrincipios = jest
      .spyOn(principiosService, 'getAllPrincipios')
      .mockReturnValue(of(PRINCIPIOS_DE_ARQUITECTURA));
    fixture.detectChanges();
    expect(spyGetAllPrincipios).toHaveBeenCalled();
  });

  it('debería asignar los principios recibidos del servicio', () => {
    jest.spyOn(principiosService, 'getAllPrincipios').mockReturnValue(of(PRINCIPIOS_DE_ARQUITECTURA));
    fixture.detectChanges();
    expect(component.principios).toEqual(PRINCIPIOS_DE_ARQUITECTURA);
  });

  it('debería renderizar una card por cada principio', () => {
    jest.spyOn(principiosService, 'getAllPrincipios').mockReturnValue(of(PRINCIPIOS_DE_ARQUITECTURA));
    fixture.detectChanges();
    const cards = fixture.debugElement.queryAll(By.css('.arquitectura-card'));
    expect(cards.length).toBe(component.principios.length);
  });

  it('debería mostrar el título de cada principio en su card', () => {
    jest.spyOn(principiosService, 'getAllPrincipios').mockReturnValue(of(PRINCIPIOS_DE_ARQUITECTURA));
    fixture.detectChanges();
    const cards = fixture.debugElement.queryAll(By.css('.arquitectura-card'));
    cards.forEach((card, index) => {
      const titulo = card.query(By.css('h2'));
      expect(titulo.nativeElement.textContent.trim()).toBe(component.principios[index].titulo);
    });
  });
});