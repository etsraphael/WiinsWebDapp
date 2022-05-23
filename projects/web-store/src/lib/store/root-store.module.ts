import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedPublicationStoreModule } from './feed-publication-store';

@NgModule({
  declarations: [],
  providers: [],
  imports: [
    CommonModule,
    FeedPublicationStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
})
export class RootStoreModule {}
