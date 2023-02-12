import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaListsComponent } from './manga-lists.component';

describe('MangaListsComponent', () => {
  let component: MangaListsComponent;
  let fixture: ComponentFixture<MangaListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangaListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangaListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
