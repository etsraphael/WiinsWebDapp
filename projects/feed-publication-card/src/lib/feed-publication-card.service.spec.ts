import { TestBed } from '@angular/core/testing';

import { FeedPublicationCardService } from './feed-publication-card.service';

describe('FeedPublicationCardService', () => {
  let service: FeedPublicationCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedPublicationCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
