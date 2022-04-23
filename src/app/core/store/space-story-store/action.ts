import { Action } from '@ngrx/store';
import { PostModel } from '../../model/post/post.model';

export enum ActionTypes {

    ADD_STORY_POST = '@story_post/add',
    ADD_STORY_POST_SUCCESS = '@story_post/add_success',
    ADD_STORY_POST_FAIL = '@story_post/add_fail',

}

export class AddStoryPost implements Action {
    readonly type = ActionTypes.ADD_STORY_POST
    constructor(public payload: PostModel) { }
}

export type ActionsStoryPosts = AddStoryPost


