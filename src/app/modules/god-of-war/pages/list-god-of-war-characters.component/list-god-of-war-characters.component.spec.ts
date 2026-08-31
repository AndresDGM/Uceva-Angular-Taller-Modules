import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGodOfWarCharactersComponent } from './list-god-of-war-characters.component';

describe('ListGodOfWarCharactersComponent', () => {
  let component: ListGodOfWarCharactersComponent;
  let fixture: ComponentFixture<ListGodOfWarCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListGodOfWarCharactersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListGodOfWarCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
