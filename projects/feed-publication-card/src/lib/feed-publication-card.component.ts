import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarRef,
  TextOnlySnackBar,
} from '@angular/material/snack-bar';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';
import { filter, Subscription } from 'rxjs';
import { SpaceStoryCreatePostAnimation } from '../assets/animation/on-create-post-animation';
import { IFeedPublicationConfig } from './interfaces';
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
  postContent: string;

  // Picture & File
  files: File[] = [];
  extraFiles: File[] = [];
  imgPreview: string | ArrayBuffer;
  posterPreview: string | ArrayBuffer;
  videoPreview: SafeResourceUrl;

  // sub
  getImgPreviewProgressSub: Subscription;
  getVideoPreviewProgressSub: Subscription;
  getPosterPreviewProgressSub: Subscription;

  // uploaded file
  imgUploaded = false;
  posterUploaded = false;
  videoUploaded = false;

  constructor(
    public postService: PostService,
    private sanatizer: DomSanitizer,
    private _snackBar: MatSnackBar,
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
      .pipe(filter((value: number) => value === 100))
      .subscribe(() => (this.imgUploaded = true));

    this.getPosterPreviewProgressSub = this.data
      .getPosterPreviewProgress()
      .pipe(filter((value: number) => value === 100))
      .subscribe(() => (this.posterUploaded = true));

    this.getVideoPreviewProgressSub = this.data
      .getVideoPreviewProgress()
      .pipe(filter((value: number) => value === 100))
      .subscribe(() => (this.videoUploaded = true));
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
    if (value === 'picture') this.publicationType = 'picture-video';
  }

  publicationMaker():
    | PicturePublicationModel
    | PostPublicationModel
    | VideoPublicationModel
    | void {
    switch (this.visualMode) {
      case 'picture': {
        return new PicturePublicationModel(
          this.postContent,
          this.generateSymbolList('@', this.postContent),
          this.generateSymbolList('#', this.postContent),
          this.files[0].name
        );
      }
      case 'post': {
        return new PostPublicationModel(
          this.postContent,
          this.generateSymbolList('@', this.postContent),
          this.generateSymbolList('#', this.postContent),
          this.bgSelected
        );
      }
      case 'video': {
        return new VideoPublicationModel(
          this.postContent,
          this.generateSymbolList('@', this.postContent),
          this.generateSymbolList('#', this.postContent),
          this.extraFiles[0].name,
          this.files[0].name
        );
      }
    }
  }

  generateSymbolList(symb: string, text: string): string[] {
    if (!text) return [];

    const caption = [...text];
    let list: string[] = [];

    caption.forEach((value: string, index: number) => {
      if (value == symb) {
        const section = caption.slice(index);
        list = [
          ...list,
          section.join('').split(' ')[0].replace(/\s/g, '').replace(symb, ''),
        ];
      }
    });

    return list;
  }

  onSubmit(): void {
    const errorFound: boolean = this.trueIfPublicationIsValid();
    if (!errorFound) return null;

    const publication = this.publicationMaker();

    if (!publication) return null;

    return this.data.saveFeedPublication(publication);
  }

  trueIfPublicationIsValid(): boolean {
    switch (this.publicationType) {
      case 'post':
        if (!this.postContent || this.postContent.trim().length < 4) {
          this.errorMessage('Post must be at least 4 characters long', 3);
          return false;
        }
        return true;
      case 'picture':
        if (!this.imgPreview) {
          this.errorMessage('Please select an image', 3);
          return false;
        }
        if (!this.imgUploaded) {
          this.errorMessage('Please wait until the image is uploaded', 3);
          return false;
        }
        return true;
      case 'video':
        if (!this.videoPreview) {
          this.errorMessage('Please select a video', 3);
          return false;
        }
        if (!this.posterPreview) {
          this.errorMessage('Please select a poster', 3);
          return false;
        }
        if (!this.posterUploaded) {
          this.errorMessage('Please wait until the poster is uploaded', 3);
          return false;
        }
        if (!this.videoUploaded) {
          this.errorMessage('Please wait until the video is uploaded', 3);
          return false;
        }
        return true;
      case 'picture-video':
        this.errorMessage('Please select a file', 3);
        return false;
      default:
        return false;
    }
  }

  resetPublication(): void {
    this.visualMode = 'default';
    this.publicationType = null;
    this.undoPicturePreview();
    this.undoVideoPreview();
  }

  onWrittingText(event: string): void {
    this.postContent = event;
  }

  onSelect(event: NgxDropzoneChangeEvent): void {
    this.files.push(...event.addedFiles);

    // get the type
    const fileType = this.files[0].type;

    // set up the card
    switch (fileType) {
      case 'image/gif':
      case 'image/jpeg':
      case 'image/png':
        this.publicationType = 'picture';
        return this.setUpImageUpload(event);
      case 'video/mp4':
      case 'video/webm':
      case 'video/ogg':
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
      this.extraFiles = [...files];
      this.data.onChangePosterPreview(files);
    };
  }

  undoPicturePreview(): void {
    this.data.resetProgess('picture');
    this.imgPreview = null;
    this.files = [];
    this.imgUploaded = false;
  }

  undoVideoPreview(): void {
    this.data.resetProgess('video');
    this.data.resetProgess('poster');
    this.videoPreview = null;
    this.posterPreview = null;
    this.files = [];
    this.posterUploaded = false;
    this.videoUploaded = false;
  }

  errorMessage(
    message: string,
    duration: number
  ): MatSnackBarRef<TextOnlySnackBar> {
    return this._snackBar.open(message, 'Close', {
      duration: duration * 1000,
    });
  }
}
