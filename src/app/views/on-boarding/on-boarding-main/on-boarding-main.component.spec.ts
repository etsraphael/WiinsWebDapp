import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { AuthMockService } from 'src/app/core/service/auth/auth-mock.service';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { TranslationService } from 'src/app/core/service/translate/translate.service';
import { OnBoardingMainComponent } from './on-boarding-main.component';

describe('OnBoardingMainComponent', () => {
  let component: OnBoardingMainComponent;
  let fixture: ComponentFixture<OnBoardingMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatMenuModule,
        TranslateModule.forRoot(),
        BrowserAnimationsModule,
        MatSnackBarModule,
      ],
      declarations: [OnBoardingMainComponent],
      providers: [
        TranslationService,
        { provide: AuthService, useValue: new AuthMockService() },
      ],
    }).compileComponents();
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
