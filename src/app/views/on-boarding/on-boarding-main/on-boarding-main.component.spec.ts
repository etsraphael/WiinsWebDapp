import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnBoardingMainComponent } from './on-boarding-main.component';

describe('OnBoardingMainComponent', () => {
  let component: OnBoardingMainComponent;
  let fixture: ComponentFixture<OnBoardingMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnBoardingMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnBoardingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
