import {
  ChangeDetectorRef,
  Component,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { SlidePhoneAnimation } from 'src/assets/animation/on-boarding.animation';
import { githubPageDevs, wiinsweb } from 'src/app/core/data/github-page-devs';
import {
  btnLandingPageInterface,
  dataSectionWithCarousel,
  landingPageNavData,
  landingPageSectionWithCarousel,
} from 'src/app/core/data/landing-page';
import { lgInterface, lgListData } from 'src/app/core/data/language-list';
import {
  socialLists,
  socialMediaLists,
} from 'src/app/core/data/social-media-list';
import { landingPageCardAnimationService } from 'src/app/core/service/angular-animation-service/landing-page-card-animation/animation.service';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { TranslationService } from 'src/app/core/service/translate/translate.service';
import { CarouselComponent } from 'angular-responsive-carousel';

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

  @ViewChildren('myCarousel') myCarousel: QueryList<CarouselComponent>;

  dataSectionWithCarousel: landingPageSectionWithCarousel[] =
    dataSectionWithCarousel;

  constructor(
    public authService: AuthService,
    private translate: TranslationService,
    private changeDetector: ChangeDetectorRef,
    public slideAnimation: landingPageCardAnimationService
  ) {}

  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }

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

  next(i: number) {
    // this.myCarousel.next();
    // console.log(this.myCarousel);

    const carouselRef: CarouselComponent = this.myCarousel.filter(
      (e, index) => index === i
    )[0];

    carouselRef.next();
  }

  previous() {
    // this.myCarousel.prev();
    // console.log(this.myCarousel);
  }

  slideAction(dir: string, i: number): void {
    const carouselRef: CarouselComponent = this.myCarousel.filter(
      (e, index) => index === i
    )[0];

    if (dir == 'next') return carouselRef.next();
    if (dir == 'prev') return carouselRef.prev();
  }

  getButtonState(dir: string, i: number): boolean {
    if (!this.myCarousel) return false;

    const carouselRef: CarouselComponent = this.myCarousel.filter(
      (e, index) => index === i
    )[0];

    return false;
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
