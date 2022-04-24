import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';

import { SpaceStoryComponent } from './space-story.component';

describe('SpaceStoryComponent', () => {
  let component: SpaceStoryComponent;
  let fixture: ComponentFixture<SpaceStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceStoryComponent ],
      imports: [
        RouterTestingModule,
        MatDialogRef
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
