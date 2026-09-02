import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipiosDeArquitecturaComponent } from './principios-de-arquitectura.component';

describe('PrincipiosDeArquitecturaComponent', () => {
  let component: PrincipiosDeArquitecturaComponent;
  let fixture: ComponentFixture<PrincipiosDeArquitecturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrincipiosDeArquitecturaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipiosDeArquitecturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
