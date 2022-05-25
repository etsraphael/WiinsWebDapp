import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  constructor(public translate: TranslateService) {}

  // Observable (current Snackbar data)
  currentText = new BehaviorSubject<string>(null);

  // Default lang for all Users
  setDefaultLang(): void {
    this.translate.setDefaultLang('en');
  }

  // Set new languages
  setNewLang(lang: string): void {
    this.translate.use(lang);
  }

  // Display a Snackbar with current lang of interface User
  translateInCurrentLang(): void {
    this.translate
      .get('ACCESSIBILITY_APP.country-available.availability')
      .subscribe((text: string) => {
        this.currentText.next(text);
      });
  }
}
