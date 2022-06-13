import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';
import { Subscription } from 'rxjs';
import { SpaceStoryCreatePostAnimation } from '../assets/animation/on-create-post-animation';
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
  publicationType: string;

  visualMode = 'default'; // Picture/ Video / Post
  bgSelected: BackgroundPostModel;

  // Comment & Hahstags
  commentInputValue = '';
  commenInputError = false;
  hashtagsListsValues: string[] = [];

  // Picture & File
  selectedImageFile: File;
  selectedImage: string;
  files: File[] = [];
  imgPreview: string | ArrayBuffer;
  posterPreview: string | ArrayBuffer;
  videoPreview: SafeResourceUrl;

  // sub
  getImgPreviewProgressSub: Subscription;
  getVideoPreviewProgressSub: Subscription;
  getPosterPreviewProgressSub: Subscription;

  constructor(
    public postService: PostService,
    private sanatizer: DomSanitizer,
    public dialogRef: MatDialogRef<FeedPublicationCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IFeedPublicationConfig
  ) {}

  ngOnInit(): void {
    this.generateSubscription();
    this.setUpDefaultBackground(this.data.backgroundSelected);
  }

  ngOnDestroy(): void {
    if (this.getImgPreviewProgressSub) {
      this.getImgPreviewProgressSub.unsubscribe();
    }
    if (this.getPosterPreviewProgressSub) {
      this.getPosterPreviewProgressSub.unsubscribe();
    }
    if (this.getVideoPreviewProgressSub) {
      this.getVideoPreviewProgressSub.unsubscribe();
    }
  }

  generateSubscription(): void {
    this.getImgPreviewProgressSub = this.data
      .getImgPreviewProgress()
      .subscribe((progress: number) => {
        if (progress === 100) {
          alert('uploaded');
        }
      });

    this.getPosterPreviewProgressSub = this.data
      .getPosterPreviewProgress()
      .subscribe((progress: number) => {
        if (progress === 100) {
          alert('uploaded');
        }
      });

    this.getVideoPreviewProgressSub = this.data
      .getVideoPreviewProgress()
      .subscribe((progress: number) => {
        if (progress === 100) {
          alert('uploaded');
        }
      });
  }

  setUpDefaultBackground(index: number): void {
    this.bgSelected = this.data.linearBackgroundList[index];
  }

  onChangebackground(value: BackgroundPostModel): void {
    this.bgSelected = value;
  }

  onSelectPublicationType(value: string): void {
    this.visualMode = value;
    if (value === 'post') this.publicationType = 'post';
  }

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

  onSubmit2(commentInput: NgModel, hashtagInput: NgModel): void {
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

  onSubmit(): void {
    console.log(this.publicationType);
    // const errorFound: boolean = this.trueIfPublicationIsValid()
    // console.log(errorFound);
  }

  trueIfPublicationIsValid(): boolean {
    switch (this.publicationType) {
      case 'post':
        return true;
      case 'picture':
        return true;
      case 'video':
        return true;
      default:
        return true;
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

  resetPublication(): void {
    this.visualMode = 'default';
    this.publicationType = null;
    this.undoPicturePreview();
    this.undoVideoPreview();
  }

  onSendText(event: string): void {
    alert(event);
  }

  onSelect(event: NgxDropzoneChangeEvent): void {
    this.files.push(...event.addedFiles);

    // get the type
    const fileType = this.files[0].type;

    // set up the card
    switch (fileType) {
      case 'image/gif':
      case 'image/jpeg':
        this.publicationType = 'picture';
        return this.setUpImageUpload(event);
      case 'video/mp4':
        this.publicationType = 'video';
        return this.setUpVideoUpload(event);
      default:
        return null;
    }
  }

  setUpImageUpload(event: NgxDropzoneChangeEvent): void {
    const reader = new FileReader();
    reader.readAsDataURL(event.addedFiles[0]);
    reader.onload = () => {
      this.imgPreview = reader.result;
      const files = [new File([reader.result], event.addedFiles[0].name)];
      this.data.onChangeImgPreview(files);
    };
  }

  setUpVideoUpload(event: NgxDropzoneChangeEvent): void {
    const reader = new FileReader();
    reader.onloadend = () => {
      const blob = new Blob([reader.result], {
        type: event.addedFiles[0].type,
      });
      const url = URL.createObjectURL(blob);
      this.videoPreview = this.sanatizer.bypassSecurityTrustResourceUrl(url);
      const files = [new File([blob], event.addedFiles[0].name)];
      this.data.onChangeVideoPreview(files);
    };

    reader.readAsArrayBuffer(event.addedFiles[0]);
  }

  setUpPosterUpload(event: FileList): void {
    const reader = new FileReader();
    reader.readAsDataURL(event[0]);
    reader.onload = () => {
      this.posterPreview = reader.result;
      const files = [new File([reader.result], event[0].name)];
      this.data.onChangePosterPreview(files);
    };
  }

  undoPicturePreview(): void {
    this.data.resetProgess('picture');
    this.imgPreview = null;
    this.files = [];
  }

  undoVideoPreview(): void {
    this.data.resetProgess('video');
    this.data.resetProgess('poster');
    this.videoPreview = null;
    this.posterPreview = null;
    this.files = [];
  }
}
