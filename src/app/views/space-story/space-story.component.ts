import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-space-story',
  templateUrl: './space-story.component.html',
  styleUrls: ['./space-story.component.scss']
})
export class SpaceStoryComponent implements OnInit {
  // Masonry Options
  public masonryOptions: NgxMasonryOptions = { gutter: 10, };

  // Image & Limit
  masonryImages = [];
  limit = 15;

  constructor(public router: Router) { }

  dummyPictures = [
    [false, 'https://source.unsplash.com/433x649/?Uruguay'],
    [false, 'https://source.unsplash.com/530x572/?Jamaica'],
    [false, 'https://source.unsplash.com/531x430/?Kuwait'],
    [false, 'https://source.unsplash.com/586x1073/?Bermuda'],
    [false, 'https://source.unsplash.com/500x571/?Ecuador'],
    [false, 'https://source.unsplash.com/518x813/?Romania'],
    [false, 'https://source.unsplash.com/482x1079/?Libya'],
    [false, 'https://source.unsplash.com/473x887/?Bolivia'],
    [false, 'https://source.unsplash.com/405x1030/?Marshall Islands'],
    [false, 'https://source.unsplash.com/450x777/?Croatia (Hrvatska)'],
    [false, 'https://source.unsplash.com/528x978/?Cook Islands'],
    [false, 'https://source.unsplash.com/521x686/?Solomon Islands'],
    [false, 'https://source.unsplash.com/550x432/?Bosnia and Herzegovina'],
    [false, 'https://source.unsplash.com/540x631/?Tanzania'],
    [false, 'https://source.unsplash.com/594x443/?Chad']
  ];

  ngOnInit(): void {
    this.masonryImages = this.dummyPictures.slice(0, this.limit);
  }

}
