import { TestBed } from '@angular/core/testing';

import { FeedCardService } from './feed-card.service';

describe('FeedCardService', () => {
  let service: FeedCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
