import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FeedCardModule } from '@wiins/feed-card';
import { FeedPublicationCardModule } from '@wiins/feed-publication-card';
import { WebStoreModule } from '@wiins/web-store';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxMasonryModule } from 'ngx-masonry';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComingSoonFullScreenComponent } from './core/component/coming-soon-full-screen/coming-soon-full-screen.component';
import { MainNavBarComponent } from './core/component/main-nav-bar/main-nav-bar.component';
import { MainSearchBarComponent } from './core/component/main-search-bar/main-search-bar.component';
import { MainSidebarComponent } from './core/component/main-sidebar/main-sidebar.component';
import { PublicationTextComponent } from './core/component/publication-text/publication-text.component';
import { HomeLayoutComponent } from './core/layout/home-layout/home-layout.component';
import { SettingLayoutComponent } from './core/layout/setting-layout/setting-layout.component';
import { OnBoardingMainComponent } from './views/on-boarding/on-boarding-main/on-boarding-main.component';
import { SpaceExplorerComponent } from './views/space-explorer/space-explorer.component';
import { SpaceMessengerComponent } from './views/space-messenger/space-messenger.component';
import { SpaceMusicComponent } from './views/space-music/space-music.component';
import { SpaceStoryComponent } from './views/space-story/space-story.component';
import { SpaceTubeComponent } from './views/space-tube/space-tube.component';
@NgModule({
  declarations: [
    AppComponent,
    OnBoardingMainComponent,
    MainSearchBarComponent,
    MainNavBarComponent,
    SpaceStoryComponent,
    MainSidebarComponent,
    HomeLayoutComponent,
    SettingLayoutComponent,
    SpaceMusicComponent,
    SpaceTubeComponent,
    SpaceMessengerComponent,
    SpaceExplorerComponent,
    ComingSoonFullScreenComponent,
    PublicationTextComponent,
  ],
  imports: [
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
    WebStoreModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    BrowserAnimationsModule,
    NgxDropzoneModule,
    FeedPublicationCardModule,
    FeedCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
