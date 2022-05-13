import { TestBed } from '@angular/core/testing';

import { FeedCardPublicationService } from './feed-card-publication.service';

describe('FeedCardPublicationService', () => {
  let service: FeedCardPublicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedCardPublicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
