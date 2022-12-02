import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealResultsComponent } from './meal-results.component';

describe('MealResultsComponent', () => {
  let component: MealResultsComponent;
  let fixture: ComponentFixture<MealResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
