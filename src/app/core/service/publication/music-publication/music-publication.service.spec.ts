import { TestBed } from '@angular/core/testing';

import { MusicPublicationService } from './music-publication.service';

describe('MusicPublicationService', () => {
  let service: MusicPublicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicPublicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
