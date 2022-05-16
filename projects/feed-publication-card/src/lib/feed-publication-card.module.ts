import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeedPublicationCardComponent } from './feed-publication-card.component';

@NgModule({
  declarations: [FeedPublicationCardComponent],
  imports: [BrowserModule, CommonModule],
  exports: [FeedPublicationCardComponent],
})
export class FeedPublicationCardModule {}
