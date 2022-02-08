import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnBoardingMainComponent } from './views/on-boarding/on-boarding-main/on-boarding-main.component';

const routes: Routes = [
    // by default
    { path: '', redirectTo: 'sign', pathMatch: 'full' },

    // sign in page
    {
      path: 'sign',
      component: OnBoardingMainComponent,
    },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
