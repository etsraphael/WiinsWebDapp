import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { HomeComponent } from './views/home/home.component';
import { ContactUsComponent } from './views/on-boarding/contact-us/contact-us.component';
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
      { path: 'contact-us', component: ContactUsComponent },
    ],
  },

  // home page
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
];
const routerOPtions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 200],
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOPtions)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
