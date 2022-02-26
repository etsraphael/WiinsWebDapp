import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { HomeComponent } from './views/home/home.component';
import { ContactUsComponent } from './views/on-boarding/contact-us/contact-us.component';
import { JoinUsComponent } from './views/on-boarding/join-us/join-us.component';
import { OnBoardingMainComponent } from './views/on-boarding/on-boarding-main/on-boarding-main.component';

const routes: Routes = [
  // by default
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // sign in page
  {
    path: 'sign',
    component: OnBoardingMainComponent,
    children: [
      { path: '', redirectTo: 'join-us', pathMatch: 'full' },
      { path: 'join-us', component: JoinUsComponent },
      { path: 'contact-us', component: ContactUsComponent },
    ],
  },

  // home page
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
