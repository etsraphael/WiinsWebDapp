import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Injectable({ providedIn: 'root' })
export class TraductionService {

    constructor(private translate: TranslateService) { }

    setDefaultLang(): void {
        this.translate.setDefaultLang('en');
    }

    setNewLang(lang: string): void {
        this.translate.use(lang);
    }
}