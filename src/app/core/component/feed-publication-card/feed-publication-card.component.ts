import { Component, Input } from '@angular/core';
import { FeedPublicationModelInterface } from '@wiins/common-interfaces';

@Component({
  selector: 'app-feed-publication-card',
  templateUrl: './feed-publication-card.component.html',
  styleUrls: ['./feed-publication-card.component.scss'],
})
export class FeedPublicationCardComponent {
  @Input() feedPublication: FeedPublicationModelInterface;

  generateBackground(): string {
    return 'linear-gradient(135deg, #D92E2E 10%, #6C1B1B 100%)';
  }
}
