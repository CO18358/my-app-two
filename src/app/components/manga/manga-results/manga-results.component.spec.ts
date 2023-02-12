import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaResultsComponent } from './manga-results.component';

describe('MangaResultsComponent', () => {
  let component: MangaResultsComponent;
  let fixture: ComponentFixture<MangaResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangaResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangaResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
