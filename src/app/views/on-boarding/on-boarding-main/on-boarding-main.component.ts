import { Component } from '@angular/core';
import { SlidePhoneAnimation } from 'src/assets/animation/on-boarding.animation';
import { githubPageDevs, wiinsweb } from 'src/app/core/data/github-page-devs';
import {
  btnLandingPageInterface,
  landingPageNavData,
} from 'src/app/core/data/landing-page-nav';
import { lgInterface, lgListData } from 'src/app/core/data/language-list';
import {
  socialLists,
  socialMediaLists,
} from 'src/app/core/data/social-media-list';
import { landingPageCardAnimationService } from 'src/app/core/service/angular-animation-service/landing-page-card-animation/animation.service';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { TranslationService } from 'src/app/core/service/translate/translate.service';

@Component({
  selector: 'app-on-boarding-main',
  templateUrl: './on-boarding-main.component.html',
  styleUrls: ['./on-boarding-main.component.scss'],
  animations: [SlidePhoneAnimation],
})
export class OnBoardingMainComponent {
  // Tab
  btnTabs: btnLandingPageInterface[] = landingPageNavData;

  // Lang
  defaultLang: string = 'En';
  filteredLang: lgInterface[] = [];
  btnLanguages: lgInterface[] = lgListData;

  // Developper page (on Github)
  pageDevs: wiinsweb[] = githubPageDevs;

  // Social Lists (Contact)
  socialLists: socialLists[] = socialMediaLists;

  constructor(
    public authService: AuthService,
    private translate: TranslationService,
    public slideAnimation: landingPageCardAnimationService
  ) {}

  goToGitHub(): Window | null {
    return window.open('https://github.com/etsraphael/WiinsWebDapp', '_blank');
  }

  goToGooglePlay(): Window | null {
    return window.open(
      'https://play.google.com/store/apps/details?id=com.wiins&hl=fr&gl=US',
      '_blank'
    );
  }

  goToAppleStore(): Window | null {
    return window.open('', '_blank');
  }

  // Return the default value of the lang do not apear on the dropdown
  onOpenLang() {
    this.filteredLang = this.btnLanguages;
    const abbr = this.defaultLang;
    const newFilteredLang = this.filteredLang.filter(
      (x) => !x.language.startsWith(abbr)
    );
    return (this.filteredLang = newFilteredLang);
  }

  // Change lang of the Page
  onChangeLang(item: lgInterface) {
    this.defaultLang = item.abbr;
    this.translate.setNewLang(item.abbr.toLowerCase());
  }

  // To our Social Media
  goToSocial(path: string): Window | null {
    return window.open(path, '_blank');
  }

  // To Github Page (Devs)
  goToGitHubDev(path: string): Window | null {
    return window.open(path, '_blank');
  }

  // To Wiin's Community
  onJoinChat(): Window | null {
    return window.open('https://discord.gg/B6xUzqUp', '_blank');
  }

  // To Wiin's Web (Github)
  onWiinsWeb(): Window | null {
    return window.open('https://github.com/etsraphael/WiinsWeb', '_blank');
  }
}
