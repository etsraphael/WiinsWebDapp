import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SpaceStoryCreationPostComponent } from 'src/app/core/modal/space-story-creation-post/space-story-creation-post.component';

@Injectable({
  providedIn: 'root',
})
export class FeedPublicationService {
  dialogRef: MatDialogRef<SpaceStoryCreationPostComponent>;

  constructor(private dialog: MatDialog) {}

  onCreatePublication(): void {
    this.dialogRef = this.dialog.open(SpaceStoryCreationPostComponent, {
      panelClass: ['col-5', 'p-0'],
    });
  }
}