import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-i-white-paper',
  templateUrl: './i-white-paper.component.html',
  styleUrls: ['./i-white-paper.component.scss']
})
export class IWhitePaperComponent implements OnInit {
  // Slide Animation
  slide_change: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // Component appear when the Scroll is at 
  @HostListener("document:scroll")
  scrollfunction() {
    console.log(document.body.scrollTop);
    if (document.body.scrollTop > 7400 || document.documentElement.scrollTop > 7400) {
      this.slide_change = true;
    }
  }
}
