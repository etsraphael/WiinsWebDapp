import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BImagineEarlyAccessComponent } from './b-imagine-early-access.component';

describe('BImagineEarlyAccessComponent', () => {
  let component: BImagineEarlyAccessComponent;
  let fixture: ComponentFixture<BImagineEarlyAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BImagineEarlyAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BImagineEarlyAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
