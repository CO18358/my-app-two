import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaTopComponent } from './manga-top.component';

describe('MangaTopComponent', () => {
  let component: MangaTopComponent;
  let fixture: ComponentFixture<MangaTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangaTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangaTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
