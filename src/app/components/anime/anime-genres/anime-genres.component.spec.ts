import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeGenresComponent } from './anime-genres.component';

describe('AnimeGenresComponent', () => {
  let component: AnimeGenresComponent;
  let fixture: ComponentFixture<AnimeGenresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeGenresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
