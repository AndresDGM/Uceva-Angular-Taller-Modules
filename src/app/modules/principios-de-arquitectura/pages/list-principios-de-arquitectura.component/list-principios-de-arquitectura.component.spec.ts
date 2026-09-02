import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrincipiosDeArquitecturaComponent } from './list-principios-de-arquitectura.component';

describe('ListPrincipiosDeArquitecturaComponent', () => {
  let component: ListPrincipiosDeArquitecturaComponent;
  let fixture: ComponentFixture<ListPrincipiosDeArquitecturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPrincipiosDeArquitecturaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPrincipiosDeArquitecturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
