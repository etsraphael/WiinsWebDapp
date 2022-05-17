import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationTextComponent } from './publication-text.component';

describe('PublicationTextComponent', () => {
  let component: PublicationTextComponent;
  let fixture: ComponentFixture<PublicationTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublicationTextComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
