import { Component } from '@angular/core';
import { socialIconsLists, socialLists } from '../../data/social-media-list';

@Component({
  selector: 'app-coming-soon-full-screen',
  templateUrl: './coming-soon-full-screen.component.html',
  styleUrls: ['./coming-soon-full-screen.component.scss'],
})
export class ComingSoonFullScreenComponent {
  socialIcons: socialLists[] = socialIconsLists;
}
