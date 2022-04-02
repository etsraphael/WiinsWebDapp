import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnBoardingMainComponent } from './views/on-boarding/on-boarding-main/on-boarding-main.component';
import { ContactUsComponent } from './views/on-boarding/contact-us/contact-us.component';
import { HomeComponent } from './views/home/home.component';
import { MainSearchBarComponent } from './core/component/main-search-bar/main-search-bar.component';
import { MainNavBarComponent } from './core/component/main-nav-bar/main-nav-bar.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { RootStoreModule } from './core/store';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpaceStoryComponent } from './views/space-story/space-story.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { MainSidebarComponent } from './core/component/main-sidebar/main-sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    OnBoardingMainComponent,
    ContactUsComponent,
    HomeComponent,
    MainSearchBarComponent,
    MainNavBarComponent,
    SpaceStoryComponent,
    MainSidebarComponent,
  ],
  imports: [
    RootStoreModule,
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    HttpClientModule,
    NgxMasonryModule,
    MatSidenavModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
