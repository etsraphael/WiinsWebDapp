import { Component } from '@angular/core';
import { socialIconsLists, socialLists } from '../../data/social-media-list';

@Component({
  selector: 'app-coming-soon-full-screen',
  templateUrl: './coming-soon-full-screen.component.html',
  styleUrls: ['./coming-soon-full-screen.component.scss'],
})
export class ComingSoonFullScreenComponent {

  socialIcons: socialLists[] = socialIconsLists;

  // Because of the lack of informations about this button, I put the code like this
  monetaryIcons: socialLists[] = [
    {
      name: 'toDefine',
      path: 'toDefine',
      src: '../../../../assets/img/coming-soon/Zion.svg',
    },
    {
      name: 'toDefine',
      path: 'toDefine',
      src: '../../../../assets/img/coming-soon/Gift.svg',
    },
  ];

}

export interface monetaryLists {
  name: string;
  path: string;
  src: string;
}
