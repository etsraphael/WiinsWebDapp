import { Component, HostListener, OnInit } from '@angular/core';
import { MusicVideoAnimation } from 'src/app/core/animation/on-boarding-animation/on-boarding.animation';

@Component({
  selector: 'app-f-music-video',
  templateUrl: './f-music-video.component.html',
  styleUrls: ['./f-music-video.component.scss'],
  animations: [MusicVideoAnimation]
})
export class FMusicVideoComponent implements OnInit {
  // Slide Animation
  slide_change: boolean = false;

  // Slide Phone Image Animation
  default: string = 'default';
  count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  // Component appear when the Scroll is at 
  @HostListener("document:scroll")
  scrollfunction() {
    console.log(document.body.scrollTop);
    if (document.body.scrollTop > 4400 || document.documentElement.scrollTop > 4400) {
      this.slide_change = true;
    }
  }

  // Previous Phone Image
  onPrevious() {
    if (this.count === 0) {
      return;
    }
    if (this.count === 1) {
      this.count--
      this.default = 'default';
    } else if (this.count === 2) {
      this.count--
      this.default = 'step-1';
    } else {
      this.count--
      this.default = 'step-2';
    }
  }

  // Next Phone Image
  onNext() {
    if (this.count === 3) {
      return;
    }
    if (this.count === 0) {
      this.count++
      this.default = 'step-1';
    } else if (this.count === 1) {
      this.count++
      this.default = 'step-2';
    } else {
      this.count++
      this.default = 'final-step';
    }
  }

}
