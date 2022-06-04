import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComingSoonFullScreenComponent } from 'src/app/core/component/coming-soon-full-screen/coming-soon-full-screen.component';

import { SpaceMusicComponent } from './space-music.component';

describe('SpaceMusicComponent', () => {
  let component: SpaceMusicComponent;
  let fixture: ComponentFixture<SpaceMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpaceMusicComponent, ComingSoonFullScreenComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
