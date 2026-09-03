import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableArquitecturaDeSoftwareComponent } from './table-arquitectura-de-software.component';

describe('TableArquitecturaDeSoftwareComponent', () => {
  let component: TableArquitecturaDeSoftwareComponent;
  let fixture: ComponentFixture<TableArquitecturaDeSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableArquitecturaDeSoftwareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableArquitecturaDeSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
