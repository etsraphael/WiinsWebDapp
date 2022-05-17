import { TestBed } from '@angular/core/testing';

import { EditableContentEventService } from './editable-content-event.service';

describe('EditableContentEventService', () => {
  let service: EditableContentEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditableContentEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
