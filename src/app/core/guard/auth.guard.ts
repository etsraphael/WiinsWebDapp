import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import Web3 from 'web3';

@Injectable()
export class AuthGuard implements CanActivate {
  web3: Web3 | null;

  constructor(private router: Router) {
    if (typeof window['web3'] !== 'undefined') {
      this.web3 = new Web3(window.web3.currentProvider);
    }
  }

  async canActivate(): Promise<boolean> {
    if ((await this.getAccountConnected()) !== null) {
      return true;
    }
    this.router.navigate(['/sign']);
    return false;
  }

  async getAccountConnected(): Promise<string> {
    if (localStorage.getItem('accountConnected') === null) {
      return null;
    }

    return this.web3.eth
      .getAccounts()
      .then((response: string[]) => response[0]);
  }
}
