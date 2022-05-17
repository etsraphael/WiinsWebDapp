import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSearchBarComponent } from './main-search-bar.component';

describe('MainSearchBarComponent', () => {
  let component: MainSearchBarComponent;
  let fixture: ComponentFixture<MainSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainSearchBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
