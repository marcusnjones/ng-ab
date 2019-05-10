import { Injectable } from '@angular/core';
import {
    Actions,
    Effect,
    ofType
} from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import {
    map,
    mergeMap,
    catchError
} from 'rxjs/operators';
import { AppService } from '../services/app.service';
import {
    ActionTypes,
    GetEntriesSuccess
} from '../actions/app.actions';
import { Entry } from '../models/entry.model';

@Injectable()
export class AppEffects {
    constructor(private actions$: Actions, private appService: AppService) {}

    @Effect()
    getEntries$ = this.actions$.pipe(
        ofType(ActionTypes.GetEntries),
        mergeMap(action =>
            this.appService.getEntries().pipe(
                map((entries: Entry[]) => (new GetEntriesSuccess())),
                catchError(() => EMPTY)
            )
        )
    );
}
