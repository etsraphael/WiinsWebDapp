import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthMockService {
  async getAccountConnected(): Promise<string> {
    return Promise.resolve('test account');
  }

  login(): void {
    return null;
  }

  async verifyAccount(): Promise<void> {
    return null;
  }

  logout(): void {
    return null;
  }

  saveAccountConnected(): void {
    return null;
  }
}
