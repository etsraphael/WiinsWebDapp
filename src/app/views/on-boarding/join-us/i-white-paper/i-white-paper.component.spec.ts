import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IWhitePaperComponent } from './i-white-paper.component';

describe('IWhitePaperComponent', () => {
  let component: IWhitePaperComponent;
  let fixture: ComponentFixture<IWhitePaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IWhitePaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IWhitePaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
