import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-b-imagine-early-access',
  templateUrl: './b-imagine-early-access.component.html',
  styleUrls: ['./b-imagine-early-access.component.scss']
})
export class BImagineEarlyAccessComponent implements OnInit {
  // Slide Animation
  slide_change: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  goToGooglePlay(): Window | null {
    return window.open('https://play.google.com/store/apps/details?id=com.wiins&hl=fr&gl=US', '_blank');
  }

  // Component appear when the Scroll is at 
  @HostListener("document:scroll")
  scrollfunction() {
    console.log(document.body.scrollTop);
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
      this.slide_change = true;
    }
  }

}
