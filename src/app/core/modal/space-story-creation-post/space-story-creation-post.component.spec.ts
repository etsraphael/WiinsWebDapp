import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceStoryCreationPostComponent } from './space-story-creation-post.component';

describe('SpaceStoryCreationPostComponent', () => {
  let component: SpaceStoryCreationPostComponent;
  let fixture: ComponentFixture<SpaceStoryCreationPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceStoryCreationPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceStoryCreationPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
