import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenshinDbComponent } from './genshin-db.component';

describe('GenshinDbComponent', () => {
  let component: GenshinDbComponent;
  let fixture: ComponentFixture<GenshinDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenshinDbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenshinDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
