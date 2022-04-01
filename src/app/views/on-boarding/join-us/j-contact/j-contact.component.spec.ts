import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JContactComponent } from './j-contact.component';

describe('JContactComponent', () => {
  let component: JContactComponent;
  let fixture: ComponentFixture<JContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
