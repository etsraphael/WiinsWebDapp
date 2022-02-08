import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnBoardingMainComponent } from './views/on-boarding/on-boarding-main/on-boarding-main.component';
import { JoinUsComponent } from './views/on-boarding/join-us/join-us.component';
import { ContactUsComponent } from './views/on-boarding/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    OnBoardingMainComponent,
    JoinUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
