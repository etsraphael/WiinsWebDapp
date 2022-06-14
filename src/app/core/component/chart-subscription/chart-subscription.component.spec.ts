import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSubscriptionComponent } from './chart-subscription.component';

describe('ChartSubscriptionComponent', () => {
  let component: ChartSubscriptionComponent;
  let fixture: ComponentFixture<ChartSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartSubscriptionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
