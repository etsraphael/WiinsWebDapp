import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModelsComponent } from './common-models.component';

describe('CommonModelsComponent', () => {
  let component: CommonModelsComponent;
  let fixture: ComponentFixture<CommonModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonModelsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
