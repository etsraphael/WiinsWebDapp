import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class spaceStoryCreationPostService {
    // Animation Post
    defaultWrittenPost: string = 'defaultWrittenPost';
    defaultPicturePost: string = 'defaultPicturePost';

    // Animation Input Post
    defaultCommentToHashtag: string = 'defaultCommentToHashtag';
    defaultHashtagToComment: string = 'defaultHashtagToComment';

    // Creation mode & Input field
    creationMode: string = '';
    commentInput: string = '';
    hashtagInput: string = '';

    // For "disableClose" on Main Sidebarr.ts, if User write a comment, a click outside the dialog can't close it
    // ...

    // Background of Written Post
    choice1 = 'linear-gradient(135deg, #1BB7E9 10%, #2B418D 100%)';
    choice2 = 'linear-gradient(135deg, #5CC928 0%, #157155 100%)';
    choice3 = 'linear-gradient(135deg, #D92E2E 10%, #6C1B1B 100%)';
    choice4 = 'linear-gradient(135deg, #E11FD9 5%, #761D72 100%)';
    choice5 = 'linear-gradient(135deg, #FB8A06 10%, #844C0A 100%)';
    choice6 = 'linear-gradient(135deg, #FBF10E 0%, #898400 100%)';
    defaultChoice = 'url(../../../../assets/img/story-space-creation/written-post.svg)';
    bgrdWrittenPost: string;

    // If user select Written Post
    selectedWrittenPost(): void {
        this.defaultWrittenPost = 'selectedWrittenPost';
        setTimeout(() => {
            this.creationMode = 'writtenPost';
            this.defaultWrittenPost = 'isCompletingWrittenPost';
            this.bgrdWrittenPost = this.choice1;
        }, 400);
    }

    // If user select Picture Post
    selectedPicturePost(): void {
        this.defaultPicturePost = 'selectedPicturePost';
        setTimeout(() => {
            this.creationMode = 'picturePost';
            this.defaultPicturePost = 'isCompletingPicturePost';
        }, 400);
    }

    // If user want to go Back
    return(): void {
        if (this.creationMode.includes('writtenPost')) {
            this.defaultWrittenPost = 'goBack';
            this.commentInput = '';
            this.hashtagInput = '';
            setTimeout(() => {
                this.creationMode = '';
                this.defaultWrittenPost = 'defaultWrittenPost'
            }, 300);
        }
        if (this.creationMode.includes('picturePost')) {
            this.defaultPicturePost = 'goBack';
            this.commentInput = '';
            this.hashtagInput = '';
            setTimeout(() => {
                this.creationMode = '';
                this.defaultPicturePost = 'defaultPicturePost'
            }, 300);
        }
    }

    // If user want to add some Hashtags (click again go to Comment)
    toHashtag(): void {
        this.defaultCommentToHashtag = 'selectedCommentToHashtag';
        this.defaultHashtagToComment = 'selectedHashtagToComment';
    }

    // If user want to add Comment (click again go to Hahstag)
    toComment(): void {
        this.defaultCommentToHashtag = 'defaultCommentToHashtag';
        this.defaultHashtagToComment = 'defaultHashtagToComment';
    }

    toDefault(): void {
        this.defaultWrittenPost = 'defaultWrittenPost';
        this.defaultPicturePost = 'defaultPicturePost';
        this.creationMode = '';
        this.commentInput = '';
        this.defaultCommentToHashtag = 'defaultCommentToHashtag';
        this.defaultHashtagToComment = 'defaultHashtagToComment';
        this.bgrdWrittenPost = 'url(../../../../assets/img/story-space-creation/written-post.svg)';
    }
}
