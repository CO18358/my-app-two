import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaRecommendComponent } from './manga-recommend.component';

describe('MangaRecommendComponent', () => {
  let component: MangaRecommendComponent;
  let fixture: ComponentFixture<MangaRecommendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangaRecommendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangaRecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
