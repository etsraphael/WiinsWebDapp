import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { SpaceStoryCreationPostComponent } from '../../modal/space-story-creation-post/space-story-creation-post.component';
import { spaceStoryCreationPostService } from '../../service/angular-animation-service/feed-creation-card-animation/animation.service';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss'],
})
export class MainSidebarComponent implements OnInit {
  sibarBtnDate: routeSideBarBtn[] = [
    {
      name: 'home',
      icon: '../../../../assets/img/sidebar-btn-home/home.png',
      route: './SpaceStory',
    },
    {
      name: 'messenger',
      icon: '../../../../assets/img/sidebar-btn-home/messenger.png',
      route: './SpaceMessenger',
    },
    {
      name: 'video',
      icon: '../../../../assets/img/sidebar-btn-home/tube.png',
      route: './SpaceTube',
    },
    {
      name: 'discover',
      icon: '../../../../assets/img/sidebar-btn-home/explorer.png',
      route: './SpaceExplorer',
    }
  ];

  constructor(
    public dialog: MatDialog,
    public creationPost: spaceStoryCreationPostService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void { }

  onCreatePost(): void {

    const dialogRef = this.dialog.open(SpaceStoryCreationPostComponent, {
      panelClass: ['col-5', 'p-0']
    });
    dialogRef.afterClosed().subscribe(result => {
      this.creationPost.toDefault();
    });
  }

  onLogOut(): void {
    return this.authService.logout();
  }
}

interface routeSideBarBtn {
  name: string;
  icon: string;
  route: string;
}
