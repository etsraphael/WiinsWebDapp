import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { SpaceStoryCreationPostComponent } from 'src/app/core/modal/space-story-creation-post/space-story-creation-post.component';
import { spaceStoryCreationPostService } from '../../angular-animation-service/feed-creation-card-animation/animation.service';

@Injectable({
  providedIn: 'root',
})
export class FeedPublicationService {
  dialogRef: MatDialogRef<SpaceStoryCreationPostComponent>;
  dialofRefSub: Subscription;

  constructor(
    private dialog: MatDialog,
    private creationPost: spaceStoryCreationPostService
  ) {}

  onCreatePublication(): void {
    this.dialogRef = this.dialog.open(SpaceStoryCreationPostComponent, {
      panelClass: ['col-5', 'p-0'],
    });

    this.dialofRefSub = this.dialogRef.afterClosed().subscribe(() => {
      this.creationPost.toDefault();
    });
  }

  onClosePublication(): void {
    return this.dialofRefSub.unsubscribe();
  }
}
