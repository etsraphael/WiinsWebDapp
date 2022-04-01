import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DMessengerComponent } from './d-messenger.component';

describe('DMessengerComponent', () => {
  let component: DMessengerComponent;
  let fixture: ComponentFixture<DMessengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DMessengerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DMessengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
