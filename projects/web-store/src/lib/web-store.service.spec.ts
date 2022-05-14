import { TestBed } from '@angular/core/testing';

import { WebStoreService } from './web-store.service';

describe('WebStoreService', () => {
  let service: WebStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
