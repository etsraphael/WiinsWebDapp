import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}

  goToGitHub(): Window | null {
    return window.open('https://github.com/etsraphael/WiinsWebDapp', '_blank');
  }
}

export interface btnRoutes {
  name: string;
  path: string;
}
