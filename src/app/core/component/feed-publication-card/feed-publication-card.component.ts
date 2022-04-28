import { Component, Input, OnInit } from '@angular/core';
import { PicturePublicationModel, PostPublicationModel, VideoPublicationModel } from '../../model/publication/feed-publication.model';

@Component({
  selector: 'app-feed-publication-card',
  templateUrl: './feed-publication-card.component.html',
  styleUrls: ['./feed-publication-card.component.scss']
})
export class FeedPublicationCardComponent implements OnInit {

  @Input() feedPublication: (PicturePublicationModel | PostPublicationModel | VideoPublicationModel | any);

  constructor() { }

  ngOnInit(): void {  }

}
