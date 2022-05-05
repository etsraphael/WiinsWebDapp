import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthMockService {
    
  async getAccountConnected(): Promise<string> {
    return Promise.resolve('test account');
  }

  login(): void {}

  async verifyAccount(): Promise<void> {}

  logout(): void {}

  saveAccountConnected(account: string): void {}
}
