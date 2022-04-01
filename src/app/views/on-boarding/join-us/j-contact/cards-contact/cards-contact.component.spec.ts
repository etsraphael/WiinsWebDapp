import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsContactComponent } from './cards-contact.component';

describe('CardsContactComponent', () => {
  let component: CardsContactComponent;
  let fixture: ComponentFixture<CardsContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
