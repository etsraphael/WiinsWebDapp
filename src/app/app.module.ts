import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnBoardingMainComponent } from './views/on-boarding/on-boarding-main/on-boarding-main.component';
import { JoinUsComponent } from './views/on-boarding/join-us/join-us.component';
import { ContactUsComponent } from './views/on-boarding/contact-us/contact-us.component';
import { HomeComponent } from './views/home/home.component';
import { MainSearchBarComponent } from './core/component/main-search-bar/main-search-bar.component';
import { MainNavBarComponent } from './core/component/main-nav-bar/main-nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    OnBoardingMainComponent,
    JoinUsComponent,
    ContactUsComponent,
    HomeComponent,
    MainSearchBarComponent,
    MainNavBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
