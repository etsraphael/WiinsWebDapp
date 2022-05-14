import { TestBed } from '@angular/core/testing';

import { CommonModelsService } from './common-models.service';

describe('CommonModelsService', () => {
  let service: CommonModelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonModelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
