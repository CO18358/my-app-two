import { ComponentFixture, TestBed } from '@angular/core/testing';

import MangaDictionaryComponent from './manga-dictionary.component';

describe('MangaDictionaryComponent', () => {
  let component: MangaDictionaryComponent;
  let fixture: ComponentFixture<MangaDictionaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MangaDictionaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MangaDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
