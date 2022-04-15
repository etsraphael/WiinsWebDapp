import { Component, OnInit } from '@angular/core';
import { sidebarAnimationService } from '../../service/slide-navbar-animation/animation.service';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss'],
})
export class MainSidebarComponent implements OnInit {
  constructor(
    private authService: AuthService,
    public sidebarAnimation: sidebarAnimationService
  ) {}

  ngOnInit(): void {}

  onLogOut(): void {
    return this.authService.logout();
  }
}
