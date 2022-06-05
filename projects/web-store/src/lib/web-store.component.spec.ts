import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebStoreComponent } from './web-store.component';

describe('WebStoreComponent', () => {
  let component: WebStoreComponent;
  let fixture: ComponentFixture<WebStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebStoreComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
