import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { SpaceStoryCreatePostAnimation } from '../../../../assets/animation/on-create-post-animation';
import { linearBgPost } from '../../data/linear-background-post-list';
import {
  BackgroundPostModel,
  PicturePublicationModel,
  PostPublicationModel,
  VideoPublicationModel,
} from '../../model/publication/feed-publication.model';
import { spaceStoryCreationPostService } from '../../service/angular-animation-service/feed-creation-card-animation/animation.service';

@Component({
  selector: 'app-space-story-creation-post',
  templateUrl: './space-story-creation-post.component.html',
  styleUrls: ['./space-story-creation-post.component.scss'],
  animations: [SpaceStoryCreatePostAnimation],
})
export class SpaceStoryCreationPostComponent implements OnInit {
  feedPublicationCreate:
    | PicturePublicationModel
    | PostPublicationModel
    | VideoPublicationModel;

  visualMode: string; // picture/ video / post
  backgroundPostList: BackgroundPostModel[] = linearBgPost

  commentInputValue: string = '';
  commentInputError: boolean = false;
  hashtagsLists: string[] = [];

  selectedImageFile: File;
  selectedImage: string;

  /* I had 3 approaches here, use Subscription for see every animation change but => I would have had a lot of unsubscribe
  I could also put all the code here directly, no need subscription, but => I still have many functions to implement and the code would be too big
  So I used a public service to not have to declare my values here and I declared them in the html directly */
  constructor(
    public creationPost: spaceStoryCreationPostService,
    private dialog: MatDialogRef<SpaceStoryCreationPostComponent>
  ) {}

  ngOnInit(): void {}

  onSelectPublicationType(value: string): void {
    this.visualMode = value;

    switch (value) {
      case 'picture': {
        return this.creationPost.selectedPicturePost();
      }
      case 'post': {
        return this.creationPost.selectedWrittenPost();
      }
    }
  }

  // If user select Written Post, display some animation
  onSelectedWrittenPost(): void {
    if (this.creationPost.creationMode === 'writtenPost') {
      return;
    }
    this.creationPost.selectedWrittenPost();
  }

  // If user select Picture Post, display some animation
  onSelectedPicturePost(): void {
    if (this.creationPost.creationMode === 'picturePost') {
      return;
    }
    this.creationPost.selectedPicturePost();
  }

  // If user want to go Back resets all animations
  goBack(): void {
    this.creationPost.return();
    this.commentInputError = false;
    this.hashtagsLists = [];
    this.creationPost.bgrdWrittenPost = this.creationPost.defaultChoice;
  }

  // If user want to add some Hashtags, display some animation (click again go to Comment)
  onHashtag(): void {
    this.creationPost.toHashtag();
  }

  // If user want to add Comment, display some animation (click again go to Hahstag)
  onComment(): void {
    this.creationPost.toComment();
  }

  // Change the color choice of the Background for the Post
  changebackground(bgrdChoice: string): void {
    this.creationPost.bgrdWrittenPost = bgrdChoice;
  }

  // Submit Data for Create new Post (Simple test with gross value before i get access to Real Data)
  onSubmit(commentInput: NgModel, hashtagInput: NgModel): void {
    // check the errors
    // build the publication

    // Get and Check if comment is valid
    this.getCommentValue(commentInput);
    const comment = this.commentInputValue;
    // Get Creator
    const creator = 'Nathanaël';
    const avatarCreator =
      'https://images.unsplash.com/photo-1459356979461-dae1b8dcb702?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

    // Check Error

    if (!this.commentIsValid) {
      console.log('An error has occurred');
    }
    const myNewFb = this.publicationMaker();
    this.dialog.close();
  }

  publicationMaker():
    | PicturePublicationModel
    | PostPublicationModel
    | VideoPublicationModel
    | any{
    switch (this.visualMode) {
      case 'picture': {
        return null!;
      }
      case 'post': {
        const bgPost = new BackgroundPostModel(['red', 'green'], {
          start: [0, 0],
          end: [1, 1],
        });

        return new PostPublicationModel('mynewtitle', ['1', '2'], bgPost);
      }
    }
  }

  commentIsValid(): boolean {
    if (this.commentInputValue.trim().length < 4) {
      return false;
    } else {
      return true;
    }
  }

  // Check and Validate Comment
  getCommentValue(commentInput: NgModel): boolean | string {
    if (commentInput.value.trim().length < 4) {
      return (this.commentInputError = true);
    } else {
      this.commentInputError = false;
      return (this.commentInputValue = commentInput.value);
    }
  }

  // If user want to add some hashtags
  onPushHashtag(hashtagInput: NgModel): void {
    if (hashtagInput.value.length < 4) {
      return;
    }
    this.hashtagsLists.push(hashtagInput.value);
    this.creationPost.hashtagInput = '';
  }

  // Read File (image)
  onPhotoSelected(photoSelector: HTMLInputElement): void {
    this.selectedImageFile = photoSelector.files[0];
    if (!this.selectedImageFile) return;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(this.selectedImageFile);
    fileReader.addEventListener('loadend', (ev) => {
      let readableString = fileReader.result.toString();
      let postPreviewImage = <HTMLImageElement>(
        document.getElementById('post-preview-image')
      );
      postPreviewImage.src = readableString;
      this.selectedImage = readableString;
    });
  }
}
