import { TestBed } from '@angular/core/testing';

import { FeedPublicationMakerService } from './feed-publication-maker.service';

describe('FeedPublicationMakerService', () => {
  let service: FeedPublicationMakerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedPublicationMakerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
