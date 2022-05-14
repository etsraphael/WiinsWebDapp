import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedPublicationCardComponent } from './feed-publication-card.component';

describe('FeedPublicationCardComponent', () => {
  let component: FeedPublicationCardComponent;
  let fixture: ComponentFixture<FeedPublicationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedPublicationCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedPublicationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
