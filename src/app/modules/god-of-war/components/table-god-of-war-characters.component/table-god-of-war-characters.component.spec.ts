import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableGodOfWarCharactersComponent } from './table-god-of-war-characters.component';

describe('TableGodOfWarCharactersComponent', () => {
  let component: TableGodOfWarCharactersComponent;
  let fixture: ComponentFixture<TableGodOfWarCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableGodOfWarCharactersComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TableGodOfWarCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
