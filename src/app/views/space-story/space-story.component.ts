import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PostModel } from 'src/app/core/model/post/post.model';

@Component({
  selector: 'app-space-story',
  templateUrl: './space-story.component.html',
  styleUrls: ['./space-story.component.scss']
})
export class SpaceStoryComponent implements OnInit {
  publicationPosts: PostModel[] = [];

  constructor(
    public router: Router,
    private store: Store<{ storyPosts: { spaceStoryPosts: PostModel[] } }>) { }

  ngOnInit(): void {
    this.store.select('storyPosts').subscribe((posts) => {
      this.publicationPosts = posts.spaceStoryPosts;
    })
  }

}
