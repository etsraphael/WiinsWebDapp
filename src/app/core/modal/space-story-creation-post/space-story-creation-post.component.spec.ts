import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { SpaceStoryCreationPostComponent } from './space-story-creation-post.component';

describe('SpaceStoryCreationPostComponent', () => {
  let component: SpaceStoryCreationPostComponent;
  let fixture: ComponentFixture<SpaceStoryCreationPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpaceStoryCreationPostComponent],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        StoreModule.forRoot({})
      ],
      providers: [{ provide: MatDialogRef, useValue: {} }],
    }).compileComponents();
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
