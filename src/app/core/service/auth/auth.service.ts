import { Injectable } from '@angular/core';
import { MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Web3 from 'web3';
import { SnackBarService } from '../snackbar/snackbar.service';
import { TranslationService } from '../translate/translate.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  web3: Web3 | null;

  constructor(
    private router: Router,
    private snackBarService: SnackBarService,
    private translate: TranslationService
  ) {
    if (typeof window['web3'] !== 'undefined') {
      this.web3 = new Web3(window.web3.currentProvider);
    }
  }

  async getAccountConnected(): Promise<string> {
    if (localStorage.getItem('accountConnected') === null) {
      return null;
    }

    return this.web3.eth
      .getAccounts()
      .then((response: string[]) => response[0]);
  }

  login(): void | MatSnackBarRef<TextOnlySnackBar> {
    if (environment.production) {
      return this.snackBarService.openSnackBar(
        this.translate.translateInCurrentLang(
          'ACCESSIBILITY_APP.country-available.availability'
        ),
        5
      );
    }

    if (
      typeof window['ethereum'] == 'undefined' ||
      typeof window['ethereum'].isMetaMask == 'undefined'
    ) {
      return this.snackBarService.openSnackBar('Please install Metamask', 5);
    }

    if (window.ethereum.isMetaMask) {
      return window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((response: string[]) => {
          this.saveAccountConnected(response[0]);
          this.router.navigate(['./home']);
        })
        .catch(() => {
          console.log('requested accounts error');
        });
    }
  }

  async verifyAccount(): Promise<void> {
    const accountConnected: string = await this.getAccountConnected();

    return this.web3.eth.personal
      .sign(
        `Please sign to let us verify that you are the owner of this address ${accountConnected}`,
        '0xb121E31149AC9E51cB159705e5a3F4b8E614B5E4',
        null
      )
      .then(
        (response: string) => {
          console.log('response ');
          console.log(response);
        },
        (error: string) => {
          console.log('error: ');
          console.log(error);
        }
      );
  }

  logout(): void {
    this.router.navigate(['/sign']);
    return localStorage.removeItem('accountConnected');
  }

  saveAccountConnected(account: string): void {
    return localStorage.setItem('accountConnected', account);
  }
}
