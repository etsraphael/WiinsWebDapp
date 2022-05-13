import {
  ChangeDetectorRef,
  Component,
  QueryList,
  ViewChildren
} from '@angular/core';
import { CarouselComponent } from 'angular-responsive-carousel';
import { githubPageDevs, wiinsweb } from 'src/app/core/data/github-page-devs';
import {
  btnLandingPageInterface,
  coFounderData,
  coFounderInterface,
  dataSectionWithCarousel,
  firstCommunityData,
  landingPageNavData,
  landingPageSectionWithCarousel,
  repositoryLinkData,
  repositoryLinkInterface
} from 'src/app/core/data/landing-page';
import { lgInterface, lgListData } from 'src/app/core/data/language-list';
import {
  socialLists,
  socialMediaLists
} from 'src/app/core/data/social-media-list';
import { landingPageCardAnimationService } from 'src/app/core/service/angular-animation-service/landing-page-card-animation/animation.service';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { TranslationService } from 'src/app/core/service/translate/translate.service';
import { SlidePhoneAnimation } from 'src/assets/animation/on-boarding.animation';

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
  defaultLang = 'En';
  filteredLang: lgInterface[] = [];
  btnLanguages: lgInterface[] = lgListData;

  // Developper page (on Github)
  pageDevs: wiinsweb[] = githubPageDevs;

  // Social Lists (Contact)
  @ViewChildren('myCarousel') myCarousel: QueryList<CarouselComponent>;

  // data
  dataSectionWithCarousel: landingPageSectionWithCarousel[] =
    dataSectionWithCarousel;
  coFounderList: coFounderInterface[] = coFounderData;
  firstCommunity: string[] = firstCommunityData;
  repositoryList: repositoryLinkInterface[] = repositoryLinkData;
  socialLists: socialLists[] = socialMediaLists;

  constructor(
    public authService: AuthService,
    private translate: TranslationService,
    private changeDetector: ChangeDetectorRef,
    public slideAnimation: landingPageCardAnimationService
  ) {}

  ngAfterViewChecked(): void {
    this.changeDetector.detectChanges();
  }

  goToOustideLink(link: string): Window {
    return window.open(link, '_blank');
  }

  goToGitHub(): Window {
    return window.open('https://github.com/etsraphael/WiinsWebDapp', '_blank');
  }

  goToGooglePlay(): Window {
    return window.open(
      'https://play.google.com/store/apps/details?id=com.wiins&hl=fr&gl=US',
      '_blank'
    );
  }

  goToAppleStore(): Window {
    return window.open('', '_blank');
  }

  // Return the default value of the lang do not apear on the dropdown
  onOpenLang(): lgInterface[] {
    this.filteredLang = this.btnLanguages;
    const abbr = this.defaultLang;
    const newFilteredLang = this.filteredLang.filter(
      (x) => !x.language.startsWith(abbr)
    );
    return (this.filteredLang = newFilteredLang);
  }

  // Change lang of the Page
  onChangeLang(item: lgInterface): void {
    this.defaultLang = item.abbr;
    this.translate.setNewLang(item.abbr.toLowerCase());
  }

  // To our Social Media
  goToSocial(path: string): Window {
    return window.open(path, '_blank');
  }

  // To Github Page (Devs)
  goToGitHubDev(path: string): Window {
    return window.open(path, '_blank');
  }

  // To Wiin's Community
  onJoinChat(): Window {
    return window.open('https://discord.gg/B6xUzqUp', '_blank');
  }

  // To Wiin's Web (Github)
  onWiinsWeb(): Window {
    return window.open('https://github.com/etsraphael/WiinsWeb', '_blank');
  }

  slideAction(dir: string, i: number): void {
    const carouselRef: CarouselComponent = this.myCarousel.filter(
      (e, index) => index === i
    )[0];

    if (dir == 'next') return carouselRef.next();
    if (dir == 'prev') return carouselRef.prev();
  }

  disableButton(dir: string, i: number): boolean {
    if (!this.myCarousel) return false;

    const carouselRef: CarouselComponent = this.myCarousel.filter(
      (e, index) => index === i
    )[0];

    if (dir == 'prev' && carouselRef.slide.counter == 0) {
      return true;
    }

    if (
      dir == 'next' &&
      carouselRef.cellLength == carouselRef.slide.counter + 1
    ) {
      return true;
    }

    return false;
  }
}
