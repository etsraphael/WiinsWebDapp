import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthMockService } from 'src/app/core/service/auth/auth-mock.service';
import { AuthService } from 'src/app/core/service/auth/auth.service';

import { OnBoardingMainComponent } from './on-boarding-main.component';

describe('OnBoardingMainComponent', () => {
  let component: OnBoardingMainComponent;
  let fixture: ComponentFixture<OnBoardingMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ OnBoardingMainComponent ],
      providers: [{ provide: AuthService, useValue: new AuthMockService() }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnBoardingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
