import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { NgxMasonryModule } from 'ngx-masonry';

import { SpaceStoryComponent } from './space-story.component';

describe('SpaceStoryComponent', () => {
  let component: SpaceStoryComponent;
  let fixture: ComponentFixture<SpaceStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpaceStoryComponent],
      imports: [
        RouterTestingModule,
        NgxMasonryModule,
        StoreModule.forRoot({})
      ],
    }).compileComponents();
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
