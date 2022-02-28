import { Component, OnInit } from '@angular/core';
import { navbarButton, navigationRoute } from '../../data/navigation';
import { AuthService } from '../../service/auth/auth.service';

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

  reportIssueToDiscord(): Window | null {
    return window.open('https://discord.gg/QBuJvnn', '_blank');
  }
}
