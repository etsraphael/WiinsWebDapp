import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ALetsBuildComponent } from './a-lets-build.component';

describe('ALetsBuildComponent', () => {
  let component: ALetsBuildComponent;
  let fixture: ComponentFixture<ALetsBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ALetsBuildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ALetsBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
