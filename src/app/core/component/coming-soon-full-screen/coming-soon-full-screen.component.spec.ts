import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingSoonFullScreenComponent } from './coming-soon-full-screen.component';

describe('ComingSoonFullScreenComponent', () => {
  let component: ComingSoonFullScreenComponent;
  let fixture: ComponentFixture<ComingSoonFullScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComingSoonFullScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingSoonFullScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
