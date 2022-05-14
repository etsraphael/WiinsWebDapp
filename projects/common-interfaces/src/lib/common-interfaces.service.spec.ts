import { TestBed } from '@angular/core/testing';

import { CommonInterfacesService } from './common-interfaces.service';

describe('CommonInterfacesService', () => {
  let service: CommonInterfacesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonInterfacesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
