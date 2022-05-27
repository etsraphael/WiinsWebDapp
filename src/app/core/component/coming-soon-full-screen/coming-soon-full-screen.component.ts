import { Component } from '@angular/core';
import { socialLists } from '../../data/social-media-list';

@Component({
  selector: 'app-coming-soon-full-screen',
  templateUrl: './coming-soon-full-screen.component.html',
  styleUrls: ['./coming-soon-full-screen.component.scss'],
})
export class ComingSoonFullScreenComponent {

  socialIcons: socialLists[] = [
    {
      name: 'Discord',
      path: 'https://discord.gg/Kpdh29U6',
      src: '../../../../assets/img/core/icon/Discord.svg'
    },
    {
      name: 'Github',
      path: 'https://github.com/etsraphael/WiinsWebDapp',
      src: '../../../../assets/img/core/icon/Github.svg'
    }
  ];

  monetaryIcons: socialLists[] = [
    {
      name: 'toDefine',
      path: 'toDefine',
      src: '../../../../assets/img/coming-soon/Zion.svg'
    },
    {
      name: 'toDefine',
      path: 'toDefine',
      src: '../../../../assets/img/coming-soon/Gift.svg'
    }
  ]
}

export interface monetaryLists {
  name: string;
  path: string;
  src: string;
}