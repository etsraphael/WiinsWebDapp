import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarRef,
  TextOnlySnackBar,
} from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class SnackBarService {
  // Duration
  durationInSeconds = 10;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string): MatSnackBarRef<TextOnlySnackBar> {
    return this._snackBar.open(message, 'Close', {
      duration: this.durationInSeconds * 1000,
    });
  }
}
