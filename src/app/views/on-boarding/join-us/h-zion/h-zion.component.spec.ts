import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HZionComponent } from './h-zion.component';

describe('HZionComponent', () => {
  let component: HZionComponent;
  let fixture: ComponentFixture<HZionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HZionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HZionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
