import { Component, OnInit } from '@angular/core';
import { btnLandingPageInterface, landingPageNavData } from 'src/app/core/data/landing-page-nav';
import { lgInterface, lgListData } from 'src/app/core/data/language-list';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { FragmentService } from 'src/app/core/service/fragment/fragment.service';
import { TraductionService } from 'src/app/core/service/translate/translate.service';

@Component({
  selector: 'app-on-boarding-main',
  templateUrl: './on-boarding-main.component.html',
  styleUrls: ['./on-boarding-main.component.scss'],
})
export class OnBoardingMainComponent implements OnInit {

  btnTabs: btnLandingPageInterface[] = landingPageNavData;

  defaultLang: string = 'En';
  filteredLang: lgInterface[] = [];
  btnLanguages: lgInterface[] = lgListData

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
  onChangeLang(item: lgInterface) {
    this.defaultLang = item.abbr;
    this.translate.setNewLang(item.abbr.toLowerCase());
  }

  // Ancre
  onNavigateTo(fragment: string): void {
    this.fragmentService.onNavigateTo(fragment);
  }

}
