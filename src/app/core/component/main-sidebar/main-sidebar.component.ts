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
      icon: 'https://bafkreidraolsc7aztguujemhto2zacfyqjvsytw4iboboqbduautnhxbj4.ipfs.nftstorage.link/?filename=home.png',
      route: './SpaceStory',
    },
    {
      name: 'messenger',
      icon: 'https://bafkreige35ehznt77dqcrypnnbvmg42gxs56kpkiren5ppi6kxpyaveytq.ipfs.nftstorage.link/?filename=messenger.png',
      route: './SpaceMessenger',
    },
    {
      name: 'video',
      icon: 'https://bafkreiafrvtfiwcv2qdjximimcug6joqrsr3zysaq546tdjgt2y4l7lnhm.ipfs.nftstorage.link/?filename=tube.png',
      route: './SpaceTube',
    },
    {
      name: 'discover',
      icon: 'https://bafkreibtxfbg35xenpu4odnrrfb6luxbcosz4hitn65aa7u4d6vlnz36ue.ipfs.nftstorage.link/?filename=explorer.png',
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
