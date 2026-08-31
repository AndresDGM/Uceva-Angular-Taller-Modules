import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListGodOfWarCharacters } from './list-god-of-war-characters';

describe('ListGodOfWarCharacters', () => {
  let component: ListGodOfWarCharacters;
  let fixture: ComponentFixture<ListGodOfWarCharacters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListGodOfWarCharacters]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListGodOfWarCharacters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
