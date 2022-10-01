import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDatabaseComponent } from './movie-database.component';

describe('MovieDatabaseComponent', () => {
  let component: MovieDatabaseComponent;
  let fixture: ComponentFixture<MovieDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDatabaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
