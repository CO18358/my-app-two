import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailResultsComponent } from './cocktail-results.component';

describe('CocktailResultsComponent', () => {
  let component: CocktailResultsComponent;
  let fixture: ComponentFixture<CocktailResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocktailResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
