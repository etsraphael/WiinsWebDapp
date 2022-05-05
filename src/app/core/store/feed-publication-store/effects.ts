import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Observable, of as observableOf } from 'rxjs';
import * as featureActions from './actions';
import { ActionsFeedPublication } from './actions';

@Injectable()
export class FeedPublicationStoreEffects {
  constructor(private actions$: Actions) {}
}
