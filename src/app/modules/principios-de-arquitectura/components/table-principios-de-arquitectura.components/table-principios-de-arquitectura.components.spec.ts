import { ComponentFixture, TestBed } from '@angular/core/testing';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
