import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FragmentService } from 'src/app/core/service/fragment/fragment.service';

@Component({
  selector: 'app-h-zion',
  templateUrl: './h-zion.component.html',
  styleUrls: ['./h-zion.component.scss']
})
export class HZionComponent implements OnInit, OnDestroy {
  // Slide Animation
  slide_change: boolean = false;

  // Anchor
  tokenSubs: Subscription;
  tokenId: string = '';

  constructor(
    private fragmentService: FragmentService,
    private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    this.tokenSubs = this.fragmentService.tokenFragment.subscribe(
      (value: string) => {
        this.tokenId = value;
        if (this.tokenId === 'token') {
          setTimeout(() => {
            this.viewportScroller.scrollToAnchor(this.tokenId);
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
    if (document.body.scrollTop > 6300 || document.documentElement.scrollTop > 6300) {
      this.slide_change = true;
    }
  }

  ngOnDestroy(): void {
    this.tokenSubs.unsubscribe();
  }

}
