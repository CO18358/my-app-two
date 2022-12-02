import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealDictionaryComponent } from './meal-dictionary.component';

describe('MealDictionaryComponent', () => {
  let component: MealDictionaryComponent;
  let fixture: ComponentFixture<MealDictionaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealDictionaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
