import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import Web3 from 'web3';
@Component({
  selector: 'app-on-boarding-main',
  templateUrl: './on-boarding-main.component.html',
  styleUrls: ['./on-boarding-main.component.scss'],
})
export class OnBoardingMainComponent implements OnInit {
  btnRoutes: btnRoutes[] = [
    { name: 'Home', path: './join-us' },
    { name: 'Contat Us', path: './contact-us' },
  ];

  constructor(private router: Router, public authService: AuthService) {}

  ngOnInit(): void {
    console.log(Web3)
  }

  goToGitHub(): Window | null {
    return window.open('https://github.com/etsraphael/WiinsWebDapp', '_blank');
  }
}

export interface btnRoutes {
  name: string;
  path: string;
}
