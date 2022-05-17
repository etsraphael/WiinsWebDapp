import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComingSoonFullScreenComponent } from 'src/app/core/component/coming-soon-full-screen/coming-soon-full-screen.component';

import { SpaceExplorerComponent } from './space-explorer.component';

describe('SpaceExplorerComponent', () => {
  let component: SpaceExplorerComponent;
  let fixture: ComponentFixture<SpaceExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpaceExplorerComponent, ComingSoonFullScreenComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
