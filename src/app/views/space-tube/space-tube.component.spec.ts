import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComingSoonFullScreenComponent } from 'src/app/core/component/coming-soon-full-screen/coming-soon-full-screen.component';

import { SpaceTubeComponent } from './space-tube.component';

describe('SpaceTubeComponent', () => {
  let component: SpaceTubeComponent;
  let fixture: ComponentFixture<SpaceTubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpaceTubeComponent, ComingSoonFullScreenComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceTubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
