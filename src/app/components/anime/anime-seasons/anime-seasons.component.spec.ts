import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeSeasonsComponent } from './anime-seasons.component';

describe('AnimeSeasonsComponent', () => {
  let component: AnimeSeasonsComponent;
  let fixture: ComponentFixture<AnimeSeasonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeSeasonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeSeasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
