import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { UserConnetedStoreModule } from './user-connected-store';
import { FeedPublicationStoreModule } from './feed-publication-store';

@NgModule({
  declarations: [],
  providers: [],
  imports: [
    CommonModule,
    UserConnetedStoreModule,
    FeedPublicationStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
})
export class RootStoreModule { }
