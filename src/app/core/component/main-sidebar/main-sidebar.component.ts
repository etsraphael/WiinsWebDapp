import { Component, OnInit } from '@angular/core';
import { sidebarAnimationService } from '../../service/slide-navbar-animation/animation.service';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss'],
})
export class MainSidebarComponent implements OnInit {
  sibarBtnDate: routeSideBarBtn[] = [
    {
      name: 'home',
      icon: '../../../../assets/img/sidebar-btn-home/home.png',
      route: '/home',
    },
    {
      name: 'home',
      icon: '../../../../assets/img/sidebar-btn-home/messenger.png',
      route: '/home',
    },
    {
      name: 'home',
      icon: '../../../../assets/img/sidebar-btn-home/tube.png',
      route: '/home',
    },
    {
      name: 'home',
      icon: '../../../../assets/img/sidebar-btn-home/explorer.png',
      route: '/home',
    },
  ];

  constructor(
    private authService: AuthService,
    public sidebarAnimation: sidebarAnimationService
  ) {}

  ngOnInit(): void {}

  onLogOut(): void {
    return this.authService.logout();
  }
}

interface routeSideBarBtn {
  name: string;
  icon: string;
  route: string;
}
