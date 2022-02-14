import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';

const navigationRoute: navbarButton[] = [
  { icon: 'bi-house', link: '', fontSize: '2rem' },
  { icon: 'bi-music-note-beamed', link: '', fontSize: '2rem' },
  { icon: 'bi-chat-right-text', link: '', fontSize: '1.7rem' },
  { icon: 'bi-collection-play', link: '', fontSize: '2rem' },
  { icon: 'bi-people-fill', link: '', fontSize: '2rem' },
];

@Component({
  selector: 'app-main-nav-bar',
  templateUrl: './main-nav-bar.component.html',
  styleUrls: ['./main-nav-bar.component.scss'],
})
export class MainNavBarComponent implements OnInit {
  navigationRoute: navbarButton[] = navigationRoute;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  logOut(): void {
    return this.authService.logout();
  }
}

interface navbarButton {
  icon: string;
  link: string;
  fontSize: string;
}
