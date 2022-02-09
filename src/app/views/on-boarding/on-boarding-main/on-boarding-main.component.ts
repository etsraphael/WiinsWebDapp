import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToGitHub(): Window | null {
    return window.open('https://github.com/etsraphael/WiinsWebDapp', '_blank');
  }

  login(): void {

    if (window.ethereum.isMetaMask) {
      return window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((response: string[]) => {
          console.log(response);
          // this.saveAccountConnected(response[0]);
          this.router.navigate(['./home']);
        })
        .catch(() => {
          console.log('requested accounts error');
        });
    }
    




  }
}

export interface btnRoutes {
  name: string;
  path: string;
}
