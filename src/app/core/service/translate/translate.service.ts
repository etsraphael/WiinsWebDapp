import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  constructor(private translate: TranslateService) {}

  // Default lang for all Users
  setDefaultLang(): void {
    this.translate.setDefaultLang('en');
  }

  // Set new languages
  setNewLang(lang: string): void {
    this.translate.use(lang);
  }

  // Display a Snackbar with current message we want translate
  translateInCurrentLang(valueToTranslate: string): string {
    return this.translate.instant(valueToTranslate);
  }
}
