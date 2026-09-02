import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquitecturaDeSoftwareComponent } from './arquitectura-de-software.component';

describe('ArquitecturaDeSoftwareComponent', () => {
  let component: ArquitecturaDeSoftwareComponent;
  let fixture: ComponentFixture<ArquitecturaDeSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArquitecturaDeSoftwareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArquitecturaDeSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
