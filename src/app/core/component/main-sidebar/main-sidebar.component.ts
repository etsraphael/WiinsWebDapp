import { Component } from '@angular/core';
import { FeedPublicationService } from '../../service/publication/feed-publication/feed-publication.service';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss'],
})
export class MainSidebarComponent {
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
    },
  ];

  constructor(public feedPublicationService: FeedPublicationService) {}
}

interface routeSideBarBtn {
  name: string;
  icon: string;
  route: string;
}
