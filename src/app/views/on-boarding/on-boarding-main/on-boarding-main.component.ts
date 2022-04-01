import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { FragmentService } from 'src/app/core/service/fragment/fragment.service';
import { TraductionService } from 'src/app/core/service/translate/translate.service';

@Component({
  selector: 'app-on-boarding-main',
  templateUrl: './on-boarding-main.component.html',
  styleUrls: ['./on-boarding-main.component.scss'],
})
export class OnBoardingMainComponent implements OnInit {

  btnTabs: btnTabs[] = [
    { name: 'Ecosystem', title: 'LANDING_PAGE.on-boarding.ecosystem', fragment: 'ecosystem' },
    { name: 'Team', title: 'LANDING_PAGE.on-boarding.team', fragment: 'team' },
    { name: 'Token ZION', title: 'LANDING_PAGE.on-boarding.token-zion', fragment: 'token' },
    { name: 'Contact', title: 'LANDING_PAGE.on-boarding.contact', fragment: 'contact' }
  ];

  defaultLang: string = 'En';
  filteredLang: btnLanguages[] = [];
  btnLanguages: btnLanguages[] = [
    { language: 'Français', abbr: 'Fr', available: "available" },
    { language: 'English', abbr: 'En', available: "available" },
    { language: 'Deutsch', abbr: 'De', available: "not-available" },
    { language: '日本語', abbr: 'Ja', available: "not-available" },
    { language: '한국어', abbr: 'Ko', available: "not-available" },
    { language: 'Português', abbr: 'Pt', available: "not-available" },
    { language: 'ਪੰਜਾਬੀ', abbr: 'Pa', available: "not-available" },
    { language: 'русский', abbr: 'Ru', available: "not-available" },
    { language: 'Español', abbr: 'Es', available: "not-available" }
  ]

  constructor(
    public authService: AuthService,
    private fragmentService: FragmentService,
    private translate: TraductionService) { }

  ngOnInit(): void { }

  goToGitHub(): Window | null {
    return window.open('https://github.com/etsraphael/WiinsWebDapp', '_blank');
  }

  // The default value not apear on the dropdown
  onOpenLang() {
    this.filteredLang = this.btnLanguages;
    const abbr = this.defaultLang;
    const newFilteredLang = this.filteredLang.filter(x => !x.language.startsWith(abbr));
    return this.filteredLang = newFilteredLang;
  }

  // This method does nothing but change the text
  onChangeLang(item: btnLanguages) {
    this.defaultLang = item.abbr;
    this.translate.setNewLang(item.abbr.toLowerCase());
  }

  // Ancre
  onNavigateTo(fragment: string): void {
    this.fragmentService.onNavigateTo(fragment);
  }

}

export interface btnTabs {
  name: string;
  title: string;
  fragment: string;
}

export interface btnLanguages {
  language: string;
  abbr: string;
  available: string;
}


