import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeProducersComponent } from './anime-producers.component';

describe('AnimeProducersComponent', () => {
  let component: AnimeProducersComponent;
  let fixture: ComponentFixture<AnimeProducersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeProducersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeProducersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
