import { Component, Input } from '@angular/core';
import { IFeedCard } from './interfaces';

@Component({
  selector: 'wiins-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss'],
})
export class FeedCardComponent {
  @Input() feedPublication: IFeedCard;

  generateBackground(): string {
    return 'linear-gradient(135deg, #D92E2E 10%, #6C1B1B 100%)';
  }
}
