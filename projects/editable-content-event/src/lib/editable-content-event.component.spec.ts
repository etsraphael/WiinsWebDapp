import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableContentEventComponent } from './editable-content-event.component';

describe('EditableContentEventComponent', () => {
  let component: EditableContentEventComponent;
  let fixture: ComponentFixture<EditableContentEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditableContentEventComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableContentEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
