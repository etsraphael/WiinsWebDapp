import { Component } from '@angular/core';
import { navbarButton, navigationRoute } from '../../data/navigation';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-main-nav-bar',
  templateUrl: './main-nav-bar.component.html',
  styleUrls: ['./main-nav-bar.component.scss'],
})
export class MainNavBarComponent {
  navigationRoute: navbarButton[] = navigationRoute;

  constructor(private authService: AuthService) {}

  logOut(): void {
    return this.authService.logout();
  }

  reportIssueToDiscord(): Window | null {
    return window.open('https://discord.gg/QBuJvnn', '_blank');
  }
}
