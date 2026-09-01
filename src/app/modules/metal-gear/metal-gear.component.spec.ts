import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MetalGearComponent } from './metal-gear.component';

describe('MetalGearComponent', () => {
  let component: MetalGearComponent;
  let fixture: ComponentFixture<MetalGearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MetalGearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetalGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crear el componente', () => {
    expect(component).toBeTruthy();
  });
});
