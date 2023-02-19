import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeDictionaryComponent } from './anime-dictionary.component';

describe('AnimeDictionaryComponent', () => {
  let component: AnimeDictionaryComponent;
  let fixture: ComponentFixture<AnimeDictionaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeDictionaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
