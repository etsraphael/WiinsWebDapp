import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComingSoonFullScreenComponent } from 'src/app/core/component/coming-soon-full-screen/coming-soon-full-screen.component';

import { SpaceMessengerComponent } from './space-messenger.component';

describe('SpaceMessengerComponent', () => {
  let component: SpaceMessengerComponent;
  let fixture: ComponentFixture<SpaceMessengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpaceMessengerComponent, ComingSoonFullScreenComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceMessengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
