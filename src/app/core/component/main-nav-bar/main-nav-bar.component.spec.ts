import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthMockService } from '../../service/auth/auth-mock.service';
import { AuthService } from '../../service/auth/auth.service';
import { MainNavBarComponent } from './main-nav-bar.component';

describe('MainNavBarComponent', () => {
  let component: MainNavBarComponent;
  let fixture: ComponentFixture<MainNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MainNavBarComponent],
      providers: [{ provide: AuthService, useValue: new AuthMockService() }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
