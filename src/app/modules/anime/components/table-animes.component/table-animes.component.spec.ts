import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableAnimesComponent } from './table-animes.component';

describe('TableAnimesComponent', () => {
  let component: TableAnimesComponent;
  let fixture: ComponentFixture<TableAnimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableAnimesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TableAnimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
