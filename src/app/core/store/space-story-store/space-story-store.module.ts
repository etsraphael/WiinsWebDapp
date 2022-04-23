import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { spaceStoryPostsReducer } from './reducer';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature('storyPosts', spaceStoryPostsReducer),
    ],
    providers: []
})
export class StoryPostsStoreModule { }
