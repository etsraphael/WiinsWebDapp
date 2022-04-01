import { Component, HostListener, OnInit } from '@angular/core';
import { MessengerAnimation } from 'src/app/core/animation/on-boarding-animation/on-boarding.animation';

@Component({
  selector: 'app-d-messenger',
  templateUrl: './d-messenger.component.html',
  styleUrls: ['./d-messenger.component.scss'],
  animations: [MessengerAnimation]
})
export class DMessengerComponent implements OnInit {
  // Slide Animation
  slide_change: boolean = false;
  default: string = 'previous';
  constructor() { }

  ngOnInit(): void {
  }

  // Component appear when the Scroll is at 
  @HostListener("document:scroll")
  scrollfunction() {
    console.log(document.body.scrollTop);
    if (document.body.scrollTop > 2650 || document.documentElement.scrollTop > 2650) {
      this.slide_change = true;
    }
  }

  // Previous Phone Image
  onPrevious() {
    if (this.default === 'next') {
      this.default = 'previous';
    }
  }

  // Next Phone Image
  onNext() {
    if (this.default === 'previous') {
      this.default = 'next';
    }
  }
}
