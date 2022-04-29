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
import { FeedPublicationMakerService } from '../../service/creation/feed-publication-maker/feed-publication-maker.service';
import { SnackBarService } from '../../service/snackbar/snackbar.service';
import { FeedPublicationStoreActions, RootStoreState } from '../../store';

@Component({
  selector: 'app-space-story-creation-post',
  templateUrl: './space-story-creation-post.component.html',
  styleUrls: ['./space-story-creation-post.component.scss'],
  animations: [SpaceStoryCreatePostAnimation],
})
export class SpaceStoryCreationPostComponent implements OnInit {
  // Type Posts
  feedPublicationCreate:
    | PicturePublicationModel
    | PostPublicationModel
    | VideoPublicationModel;

  visualMode: string; // Picture/ Video / Post
  backgroundPostList: BackgroundPostModel[] = linearBgPost;
  bgSelected: BackgroundPostModel = linearBgPost[0];

  // Comment & Hahstags
  commentInputValue: string = '';
  commenInputError: boolean = false;
  hashtagsListsValues: string[] = [];

  // Picture & File
  selectedImageFile: File;
  selectedImage: string;

  constructor(
    public creationPost: spaceStoryCreationPostService,
    private snackbarService: SnackBarService,
    private dialog: MatDialogRef<SpaceStoryCreationPostComponent>,
    private store$: Store<RootStoreState.State>,
    public feedPublicationMakerService: FeedPublicationMakerService
  ) { }

  ngOnInit(): void { }

  // Select Type of Publication depending of the value
  onSelectPublicationType(value: string): void {
    this.visualMode = value;

    switch (value) {
      case 'picture': return this.creationPost.selectedPicturePost();
      case 'post': return this.creationPost.selectedWrittenPost();
      case 'video': return null!;
    }
  };

  // If user want to add Comment/Hashtag, display some animation (click again => go to Comment)
  onSelectPublicationFields(value: string): void {
    switch (value) {
      case 'comment': {
        return this.creationPost.toComment();
      }
      case 'hashtag': {
        return this.creationPost.toHashtag();
      }
    }
  }

  // Change the color choice of the Background for Written Post
  onChangebackground(value: BackgroundPostModel): void {
    this.bgSelected = value
  }

  // Build the Publication
  publicationMaker():
    | PicturePublicationModel
    | PostPublicationModel
    | VideoPublicationModel
    | any {

    switch (this.visualMode) {
      case 'picture': {
        const title = this.commentInputValue;
        const hashtags = this.hashtagsListsValues;
        const imgUrl = this.selectedImage;
        return new PicturePublicationModel(title, hashtags, imgUrl);
      }
      case 'post': {
        const title = this.commentInputValue;
        const hashtags = this.hashtagsListsValues;
        const background = new BackgroundPostModel(['red', 'green'], {
          start: [0, 0],
          end: [1, 1],
        });
        return new PostPublicationModel(title, hashtags, background);
      }
      case 'video': {
        return;
      }
    }
  }

  // Submit Data for Create new Post (Simple test with gross value before i get access to Real Data)
  onSubmit(commentInput: NgModel, hashtagInput: NgModel): void {
    // Retrieve and Assign Values
    this.commentInputValue = commentInput.value;
    this.hashtagsListsValues = hashtagInput.value;

    // Check the Errors
    if (!this.commentIsValid) {
      this.snackbarService.openSnackBar('Comment field is invalid')
    }
    if (!this.publicationMaker()) {
      this.snackbarService.openSnackBar('An error has occurred, Try again')
      return;
    }

    // Build the publication
    const myNewFb = this.publicationMaker();
    this.store$.dispatch(new FeedPublicationStoreActions.AddFeedPublication(myNewFb));
    this.dialog.close();
  }

  // Check The Errors
  commentIsValid(): boolean {
    if (this.commentInputValue.trim().length < 4) {
      this.commenInputError = true;
      return false;
    } else {
      this.commenInputError = false;
      return true;
    }
  }

  // If user want to add some hashtags
  hashtagsIsValid(hashtagInput: NgModel): void {
    if (hashtagInput.value.length < 4) {
      return;
    }
    this.hashtagsListsValues.push(hashtagInput.value);
    this.creationPost.hashtagInput = '';
  }

  // If user want to go Back resets all animations
  goBack(): void {
    this.creationPost.return();
    this.hashtagsListsValues = [];
    this.creationPost.bgrdWrittenPost = this.creationPost.defaultChoice;
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
