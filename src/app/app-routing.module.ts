import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { HomeLayoutComponent } from './core/layout/home-layout/home-layout.component';
import { OnBoardingMainComponent } from './views/on-boarding/on-boarding-main/on-boarding-main.component';
import { SpaceExplorerComponent } from './views/space-explorer/space-explorer.component';
import { SpaceMessengerComponent } from './views/space-messenger/space-messenger.component';
import { SpaceMusicComponent } from './views/space-music/space-music.component';
import { SpaceStoryComponent } from './views/space-story/space-story.component';
import { SpaceTubeComponent } from './views/space-tube/space-tube.component';

const routes: Routes = [
  // by default
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // sign in page
  {
    path: 'sign',
    component: OnBoardingMainComponent,
  },

  // home page
  {
    path: 'home',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'SpaceStory', pathMatch: 'full' },
      { path: 'SpaceStory', component: SpaceStoryComponent },
      { path: 'SpaceMessenger', component: SpaceMessengerComponent },
      { path: 'SpaceMusic', component: SpaceMusicComponent },
      { path: 'SpaceTube', component: SpaceTubeComponent },
      { path: 'SpaceExplorer', component: SpaceExplorerComponent },
    ],
  },
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
