import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { SistemasDeDisenoComponent } from './sistemas-de-diseno.component';

describe('SistemasDeDisenoComponent', () => {
  let component: SistemasDeDisenoComponent;
  let fixture: ComponentFixture<SistemasDeDisenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [SistemasDeDisenoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistemasDeDisenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
