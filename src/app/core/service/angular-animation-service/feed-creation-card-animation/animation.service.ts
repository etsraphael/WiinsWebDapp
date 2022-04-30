import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class spaceStoryCreationPostService {
    // Animation Selected Post (Picture / Post / Video)
    defaultWrittenPost: string = 'defaultWrittenPost';
    defaultPicturePost: string = 'defaultPicturePost';

    // Animation Input Post (To Hashtag / To Comment)
    defaultCommentToHashtag: string = 'defaultCommentToHashtag';
    defaultHashtagToComment: string = 'defaultHashtagToComment';

    // Visual Mode & Input field
    visualMode: string = '';
    commentInput: string = '';
    hashtagInput: string = '';

    // For "disableClose" on Main Sidebarr.ts, if User write a comment, a click outside the dialog can't close it
    // ...

    // Background of Written Post
    defaultChoice = 'url(../../../../assets/img/story-space-creation/written-post.svg)';
    bgrdWrittenPost: string;

    // If user select Written Post
    selectedWrittenPost(): void {
        this.defaultWrittenPost = 'selectedWrittenPost';
        setTimeout(() => {
            this.visualMode = 'writtenPost';
            this.defaultWrittenPost = 'isCompletingWrittenPost';
        }, 400);
    }

    // If user select Picture Post
    selectedPicturePost(): void {
        this.defaultPicturePost = 'selectedPicturePost';
        setTimeout(() => {
            this.visualMode = 'picturePost';
            this.defaultPicturePost = 'isCompletingPicturePost';
        }, 400);
    }

    // If user want to go Back
    return(): void {
        if (this.visualMode.includes('writtenPost')) {
            this.defaultWrittenPost = 'goBack';
            this.commentInput = '';
            this.hashtagInput = '';
            setTimeout(() => {
                this.visualMode = '';
                this.defaultWrittenPost = 'defaultWrittenPost'
            }, 300);
        }
        if (this.visualMode.includes('picturePost')) {
            this.defaultPicturePost = 'goBack';
            this.commentInput = '';
            this.hashtagInput = '';
            setTimeout(() => {
                this.visualMode = '';
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
        this.visualMode = '';
        this.commentInput = '';
        this.defaultCommentToHashtag = 'defaultCommentToHashtag';
        this.defaultHashtagToComment = 'defaultHashtagToComment';
        this.bgrdWrittenPost = 'url(../../../../assets/img/story-space-creation/written-post.svg)';
    }
}
