import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { RootStoreModule } from './core/store';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxMasonryModule } from 'ngx-masonry';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { OnBoardingMainComponent } from './views/on-boarding/on-boarding-main/on-boarding-main.component';
import { ContactUsComponent } from './views/on-boarding/contact-us/contact-us.component';
import { MainSearchBarComponent } from './core/component/main-search-bar/main-search-bar.component';
import { MainNavBarComponent } from './core/component/main-nav-bar/main-nav-bar.component';
import { SpaceStoryComponent } from './views/space-story/space-story.component';
import { MainSidebarComponent } from './core/component/main-sidebar/main-sidebar.component';
import { HomeLayoutComponent } from './core/layout/home-layout/home-layout.component';
import { SettingLayoutComponent } from './core/layout/setting-layout/setting-layout.component';
import { SpaceStoryCreationPostComponent } from './core/modal/space-story-creation-post/space-story-creation-post.component';

import { environment } from '../environments/environment';
import { SpaceMusicComponent } from './views/space-music/space-music.component';
import { SpaceTubeComponent } from './views/space-tube/space-tube.component';
import { SpaceMessengerComponent } from './views/space-messenger/space-messenger.component';
import { SpaceExplorerComponent } from './views/space-explorer/space-explorer.component';
import { ComingSoonFullScreenComponent } from './core/component/coming-soon-full-screen/coming-soon-full-screen.component';
import { FeedPublicationCardComponent } from './core/component/feed-publication-card/feed-publication-card.component';
import { PublicationTextComponent } from './core/component/publication-text/publication-text.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    AppComponent,
    OnBoardingMainComponent,
    ContactUsComponent,
    MainSearchBarComponent,
    MainNavBarComponent,
    SpaceStoryComponent,
    MainSidebarComponent,
    HomeLayoutComponent,
    SettingLayoutComponent,
    SpaceStoryCreationPostComponent,
    SpaceMusicComponent,
    SpaceTubeComponent,
    SpaceMessengerComponent,
    SpaceExplorerComponent,
    ComingSoonFullScreenComponent,
    FeedPublicationCardComponent,
    PublicationTextComponent,
  ],
  imports: [
    RootStoreModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMasonryModule,
    MatSidenavModule,
    IvyCarouselModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    FormsModule,
    MatSnackBarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule,
    NgxDropzoneModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
