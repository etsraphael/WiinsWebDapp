import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { FeedPublicationModelInterface } from 'projects/common-interfaces';
import { filter, Observable } from 'rxjs';
import {
  FeedPublicationStoreActions,
  FeedPublicationStoreSelectors,
  RootStoreState,
} from 'src/app/core/store';

@Component({
  selector: 'app-space-story',
  templateUrl: './space-story.component.html',
  styleUrls: ['./space-story.component.scss'],
})
export class SpaceStoryComponent implements OnInit {
  feedPublication$: Observable<FeedPublicationModelInterface[]>;

  constructor(
    public router: Router,
    private store$: Store<RootStoreState.State>
  ) {}

  ngOnInit(): void {
    this.generateObservable();

    // just for the test // to delete
    this.store$.dispatch(
      new FeedPublicationStoreActions.LoadFeedPublicationSuccess([
        {
          _id: 'wlkdfhweoifh2409f248hgfwoeur2489gh2rwg',
          createdAt:
            'Tue Apr 26 2022 20:09:38 GMT+1000 (Australian Eastern Standard Time)',
          updatedAt:
            'Tue Apr 26 2022 20:09:38 GMT+1000 (Australian Eastern Standard Time)',
          like: {
            likeNumber: 10,
            likeId: 'sdlkfjsdlfsdjf;dslfjkdslfkjnds',
            isLike: true,
          },
          profile: {
            username: 'Nathanaël',
            avatar:
              'https://avatars2.githubusercontent.com/u/17098180?s=460&v=4',
          },
          profileTagged: [],
          commentNumber: 15,
          hastags: [],
          title: "Hey what's up !",
          type: 'PostPublication',
          background: {
            colors: ['#f5f5f5', '#f5f5f5'],
            orientations: {
              start: [0, 0],
              end: [0, 0],
            },
          },
        },
        // {
        //   _id: 'wlkdfhweoifh2409f248hgfwoeur2489ghsgfdfsvs',
        //   createdAt:
        //     'Tue Apr 26 2022 20:09:38 GMT+1000 (Australian Eastern Standard Time)',
        //   updatedAt:
        //     'Tue Apr 26 2022 20:09:38 GMT+1000 (Australian Eastern Standard Time)',
        //   like: {
        //     likeNumber: 10,
        //     likeId: 'sdlkfjsdlfsdjf;dslfjkdslfkjnds',
        //     isLike: true,
        //   },
        //   profile: {
        //     username: 'Rafael',
        //     avatar:
        //       'https://avatars2.githubusercontent.com/u/17098180?s=460&v=4',
        //   },
        //   profileTagged: [],
        //   commentNumber: 15,
        //   hastags: [],
        //   title: 'What about the next step ?',
        //   type: 'PostPublication',
        //   background: {
        //     colors: ['#f5f5f5', '#f5f5f5'],
        //     orientations: {
        //       start: [0, 0],
        //       end: [0, 0],
        //     },
        //   },
        // },
        // {
        //   _id: 'wlkdfhweoifh2409f248hgfwoeur2qweghsgfdfsvs',
        //   createdAt:
        //     'Tue Apr 26 2022 20:09:38 GMT+1000 (Australian Eastern Standard Time)',
        //   updatedAt:
        //     'Tue Apr 26 2022 20:09:38 GMT+1000 (Australian Eastern Standard Time)',
        //   like: {
        //     likeNumber: 10,
        //     likeId: 'sdlkfjsdlfsdjf;dslfjkdslfkjnds',
        //     isLike: true,
        //   },
        //   profile: {
        //     username: 'Levine',
        //     avatar:
        //       'https://avatars2.githubusercontent.com/u/17098180?s=460&v=4',
        //   },
        //   profileTagged: [],
        //   commentNumber: 15,
        //   hastags: [],
        //   title: 'What about the next step ?',
        //   type: 'PicturePublication',
        //   imgUrl:
        //     'https://images.unsplash.com/photo-1650936375095-ae0b91899c16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
        // },
      ])
    );
  }

  generateObservable(): void {
    this.feedPublication$ = this.store$.pipe(
      select(FeedPublicationStoreSelectors.selectAllItems),
      filter(value => !!value)
    );
  }
}
