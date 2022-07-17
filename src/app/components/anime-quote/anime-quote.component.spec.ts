import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeQuoteComponent } from './anime-quote.component';

describe('AnimeQuoteComponent', () => {
  let component: AnimeQuoteComponent;
  let fixture: ComponentFixture<AnimeQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeQuoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
