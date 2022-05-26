import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarRef,
  TextOnlySnackBar,
} from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class SnackBarService {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(
    message: string,
    duration: number
  ): MatSnackBarRef<TextOnlySnackBar> {
    return this._snackBar.open(message, 'Close', {
      duration: duration * 1000,
    });
  }
}
