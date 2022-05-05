import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { MainNavBarComponent } from '../../component/main-nav-bar/main-nav-bar.component';
import { MainSidebarComponent } from '../../component/main-sidebar/main-sidebar.component';
import { AuthMockService } from '../../service/auth/auth-mock.service';
import { AuthService } from '../../service/auth/auth.service';

import { HomeLayoutComponent } from './home-layout.component';

describe('HomeLayoutComponent', () => {
  let component: HomeLayoutComponent;
  let fixture: ComponentFixture<HomeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatDialogModule],
      declarations: [
        HomeLayoutComponent,
        MainNavBarComponent,
        MainSidebarComponent,
      ],
      providers: [
        { provide: AuthService, useValue: new AuthMockService() },
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
