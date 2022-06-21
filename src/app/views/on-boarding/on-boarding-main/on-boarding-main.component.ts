import {
  ChangeDetectorRef,
  Component,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';
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
  repositoryLinkInterface,
} from 'src/app/core/data/landing-page';
import { lgInterface, lgListData } from 'src/app/core/data/language-list';
import {
  socialLists,
  socialMediaLists,
} from 'src/app/core/data/social-media-list';
import { StepData, StepsNumber } from 'src/app/core/data/step-by-step';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { SnackBarService } from 'src/app/core/service/snackbar/snackbar.service';
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
  stepCards: StepData[] = StepData;
  stepsNumber: { step: number }[] = StepsNumber;

  // Step by Step
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  selectedIndex: number = 0;

  constructor(
    public authService: AuthService,
    private translate: TranslationService,
    private changeDetector: ChangeDetectorRef,
    private snackBarService: SnackBarService
  ) { }

  ngAfterViewChecked(): void {
    this.changeDetector.detectChanges();
  }

  goToOustideLink(link: string): Window {
    return window.open(link, '_blank');
  }

  notAvailableInYourCountry(): MatSnackBarRef<TextOnlySnackBar> {
    return this.snackBarService.openSnackBar(
      this.translate.translateInCurrentLang(
        'ACCESSIBILITY_APP.country-available.availability'
      ),
      5
    );
  }

  // Return the default value of the lang do not apear on the dropdown
  onOpenLang(): lgInterface[] {
    this.filteredLang = this.btnLanguages;
    const abbr = this.defaultLang;
    const newFilteredLang = this.filteredLang.filter(
      x => !x.language.startsWith(abbr)
    );
    return (this.filteredLang = newFilteredLang);
  }

  // Change lang of the Page
  onChangeLang(item: lgInterface): void {
    this.defaultLang = item.abbr;
    this.translate.setNewLang(item.abbr.toLowerCase());
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

    if (dir == 'prev' && carouselRef.slide?.counter == 0) {
      return true;
    }

    if (
      dir == 'next' &&
      carouselRef.cellLength == carouselRef.slide?.counter + 1
    ) {
      return true;
    }

    return false;
  }

  // For button cards
  onSetIndex(index: number): number {
    return this.selectedIndex = index;
  }

  // For arrow cards
  onDirectionCard(direction: string) {
    switch (direction) {
      case 'prev': {
        if (this.selectedIndex === 0) {
          this.selectedIndex = 5;
        } else {
          this.selectedIndex = this.selectedIndex - 1;
        }
        break;
      }
      case 'next': {
        if (this.selectedIndex === 5) {
          this.selectedIndex = 0;
        } else {
          this.selectedIndex = this.selectedIndex + 1;
        }
        break;
      }
      default: {
        return;
      }
    }
  }

  // focus on a section
  scroll(elementId: string): void {
    return document
      .getElementById(elementId)
      .scrollIntoView({ behavior: 'smooth' });
  }
}