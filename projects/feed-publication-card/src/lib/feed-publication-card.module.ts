import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FeedPublicationCardComponent } from './feed-publication-card.component';
import { EditableContentEventModule } from '@wiins/editable-content-event';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [FeedPublicationCardComponent],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    NgxDropzoneModule,
    EditableContentEventModule,
    MatSnackBarModule,
  ],
  exports: [FeedPublicationCardComponent],
})
export class FeedPublicationCardModule {}
