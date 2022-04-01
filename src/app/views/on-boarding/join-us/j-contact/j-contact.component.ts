import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FragmentService } from 'src/app/core/service/fragment/fragment.service';

@Component({
  selector: 'app-j-contact',
  templateUrl: './j-contact.component.html',
  styleUrls: ['./j-contact.component.scss']
})
export class JContactComponent implements OnInit, OnDestroy {
  // Slide Animation
  slide_change: boolean = false;

  // Anchor
  contactSubs: Subscription;
  contactId: string = '';

  constructor(
    private fragmentService: FragmentService,
    private viewportScroller: ViewportScroller
  ) { }

  // Social Lists (Contact)
  socialLists: socialLists[] = [
    { name: 'Facebook', path: 'https://www.facebook.com/pages/category/Photography-Videography/Wiins-109652504066491/', src: '../../../../../assets/img/Icon/Facebook.svg' },
    { name: 'Instagram', path: 'https://www.instagram.com/wiins___/', src: '../../../../../assets/img/Icon/Instagram.svg' },
    { name: 'Linkedin', path: 'https://www.linkedin.com/company/espace-wiin-s/', src: '../../../../../assets/img/Icon/Linkedin.svg' },
    { name: 'Twitter', path: 'https://twitter.com/espace_s', src: '../../../../../assets/img/Icon/Twitter.svg' },
    { name: 'Github', path: 'https://github.com/etsraphael/WiinsWebDapp', src: '../../../../../assets/img/Icon/Github.svg' },
  ]

  ngOnInit(): void {
    this.contactSubs = this.fragmentService.contactFragment.subscribe(
      (value: string) => {
        this.contactId = value;
        if (this.contactId === 'contact') {
          setTimeout(() => {
            this.viewportScroller.scrollToAnchor(this.contactId);
          }, 100);
        } else {
          return;
        }
      }
    );
  }

  // Component appear when the Scroll is at 
  @HostListener("document:scroll")
  scrollfunction() {
    console.log(document.body.scrollTop);
    if (document.body.scrollTop > 8200 || document.documentElement.scrollTop > 8200) {
      this.slide_change = true;
    }
  }

  // To our Social Media
  goToSocial(path: string): Window | null {
    return window.open(path, '_blank');
  }

  ngOnDestroy(): void {
    this.contactSubs.unsubscribe();
  }
}

export interface socialLists {
  name: string;
  path: string;
  src: string;
}
