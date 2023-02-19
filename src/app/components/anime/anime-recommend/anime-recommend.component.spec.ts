import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeRecommendComponent } from './anime-recommend.component';

describe('AnimeRecommendComponent', () => {
  let component: AnimeRecommendComponent;
  let fixture: ComponentFixture<AnimeRecommendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeRecommendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeRecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
