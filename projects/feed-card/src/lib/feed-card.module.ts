import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeedCardComponent } from './feed-card.component';

@NgModule({
  declarations: [FeedCardComponent],
  imports: [BrowserModule, CommonModule],
  exports: [FeedCardComponent],
})
export class FeedCardModule {}
