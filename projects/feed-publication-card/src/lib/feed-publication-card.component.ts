import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';
import { Subscription } from 'rxjs';
import { SpaceStoryCreatePostAnimation } from '../assets/animation/on-create-post-animation';
import { linearBgPost } from '../data/linear-background-post-list';
import { IFeedCard, IFeedPublicationConfig } from './interfaces';
import {
  BackgroundPostModel,
  PicturePublicationModel,
  PostPublicationModel,
  VideoPublicationModel,
} from './models';
import { PostService } from './service';

@Component({
  selector: 'wiins-feed-publication-card',
  templateUrl: './feed-publication-card.component.html',
  styleUrls: ['./feed-publication-card.component.scss'],
  animations: [SpaceStoryCreatePostAnimation],
})
export class FeedPublicationCardComponent implements OnInit, OnDestroy {
  // Type Posts
  feedPublicationCreate:
    | PicturePublicationModel
    | PostPublicationModel
    | VideoPublicationModel;

  visualMode = 'default'; // Picture/ Video / Post
  backgroundPostList: BackgroundPostModel[] = linearBgPost;
  bgSelected: BackgroundPostModel = linearBgPost[0];

  // Comment & Hahstags
  commentInputValue = '';
  commenInputError = false;
  hashtagsListsValues: string[] = [];

  // Picture & File
  selectedImageFile: File;
  selectedImage: string;
  files: File[] = [];
  imgPreview: string | ArrayBuffer;

  // sub
  getImgPreviewProgressSub: Subscription;

  constructor(
    public postService: PostService,
    public dialogRef: MatDialogRef<FeedPublicationCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IFeedPublicationConfig
  ) {}

  ngOnInit(): void {
    this.generateSubscription();
  }

  ngOnDestroy(): void {
    if (this.getImgPreviewProgressSub)
      this.getImgPreviewProgressSub.unsubscribe();
  }

  generateSubscription(): void {
    this.getImgPreviewProgressSub = this.data
      .getImgPreviewProgress()
      .subscribe((progress: number) => {
        if (progress === 100) {
          alert('uploaded');
        }
      });
  }

  onChangebackground(value: BackgroundPostModel): void {
    this.bgSelected = value;
  }

  // Select Type of Publication depending of the value
  onSelectPublicationType(value: string): void {
    this.visualMode = value;
  }

  // Build the Publication
  publicationMaker(): IFeedCard | void {
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
        return null;
      }
    }
  }

  // Submit Data for Create new Post (Simple test with gross value before i get access to Real Data)
  onSubmit(commentInput: NgModel, hashtagInput: NgModel): void {
    // Retrieve and Assign Values
    this.commentInputValue = commentInput.value;
    this.hashtagsListsValues = hashtagInput.value;

    // Check the Errors
    if (!this.commentIsValid()) {
      // this.snackbarService.openSnackBar('Comment field is invalid');
    }

    if (!this.publicationMaker()) {
      // this.snackbarService.openSnackBar('An error has occurred, Try again');
      return;
    }
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
  }

  resetPublication(): void {
    this.visualMode = 'default';
  }

  onSendText(event: string): void {
    alert(event);
  }

  onSelect(event: NgxDropzoneChangeEvent): void {
    this.files.push(...event.addedFiles);
    const reader = new FileReader();
    reader.readAsDataURL(event.addedFiles[0]);
    reader.onload = () => {
      this.imgPreview = reader.result;
      const files = [new File([reader.result], event.addedFiles[0].name)];
      this.data.onChangeImgPreview(files);
    };
  }

  undoPicturePreview(): void {
    this.imgPreview = null;
  }
}
