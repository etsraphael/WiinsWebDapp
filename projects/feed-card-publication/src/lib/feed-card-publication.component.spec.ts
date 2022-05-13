import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedCardPublicationComponent } from './feed-card-publication.component';

describe('FeedCardPublicationComponent', () => {
  let component: FeedCardPublicationComponent;
  let fixture: ComponentFixture<FeedCardPublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedCardPublicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedCardPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
