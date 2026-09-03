import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArquitecturaDeSoftwareComponent } from './list-arquitectura-de-software.component';

describe('ListArquitecturaDeSoftwareComponent', () => {
  let component: ListArquitecturaDeSoftwareComponent;
  let fixture: ComponentFixture<ListArquitecturaDeSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListArquitecturaDeSoftwareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListArquitecturaDeSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
