import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonInterfacesComponent } from './common-interfaces.component';

describe('CommonInterfacesComponent', () => {
  let component: CommonInterfacesComponent;
  let fixture: ComponentFixture<CommonInterfacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonInterfacesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonInterfacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
