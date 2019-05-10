import {
  Component,
  OnInit
} from '@angular/core';
import {
  Store,
  select
} from '@ngrx/store';
import { Observable } from 'rxjs';
import { Entry } from './models/entry.model';
import { AppState } from './state/app.state';
import * as fromRoot from './reducers/app.reducer';
import { ActionTypes } from './actions/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-ab';
  entries$: Observable<Entry[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch({type: ActionTypes.GetEntries});

    // this.store.pipe(select(fromRoot.selectEntries)).subscribe(
    //   (entries: Entry[]) => {
    //     this.entries$ = entries;
    //   }
    // );
  }
}
