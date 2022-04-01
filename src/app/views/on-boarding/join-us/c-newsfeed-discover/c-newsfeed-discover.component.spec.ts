import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CNewsfeedDiscoverComponent } from './c-newsfeed-discover.component';

describe('CNewsfeedDiscoverComponent', () => {
  let component: CNewsfeedDiscoverComponent;
  let fixture: ComponentFixture<CNewsfeedDiscoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CNewsfeedDiscoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CNewsfeedDiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
