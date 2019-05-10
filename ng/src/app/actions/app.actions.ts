import { Action } from '@ngrx/store';
import { Entry } from '../models/entry.model';

export enum ActionTypes {
  GetEntries = '[AppComponent] GetEntries',
  GetEntriesSuccess = '[AppComponent] GetEntriesSuccess',
  CreateEntry = '[AppComponent] CreateEntry',
  CreateEntrySuccess = '[AppComponent] CreateEntrySuccess',
  DeleteEntry = '[AppComponent] DeleteEntry',
  DeleteEntrySuccess = '[AppComponent] DeleteEntrySuccess',
  UpdateEntry = '[AppComponent] UpdateEntry',
  UpdateEntrySuccess = '[AppComponent] UpdateEntrySuccess',
  DetailEntry = '[AppComponent] DetailEntry',
  DetailEntrySuccess = '[AppComponent] DetailEntrySuccess'
}

export class GetEntries implements Action {
  readonly type = ActionTypes.GetEntries;

  constructor(public payload: Entry[]) {}
}

export class GetEntriesSuccess implements Action {
  readonly type = ActionTypes.GetEntriesSuccess;

  constructor() {}
}

export class CreateEntry implements Action {
  readonly type = ActionTypes.CreateEntry;

  constructor() {}
}

export class CreateEntrySuccess implements Action {
  readonly type = ActionTypes.CreateEntrySuccess;

  constructor() {}
}

export class DeleteEntry implements Action {
  readonly type = ActionTypes.DeleteEntry;

  constructor() {}
}

export class DeleteEntrySuccess implements Action {
  readonly type = ActionTypes.DeleteEntrySuccess;

  constructor() {}
}

export class UpdateEntry implements Action {
  readonly type = ActionTypes.UpdateEntry;

  constructor() {}
}

export class UpdateEntrySuccess implements Action {
  readonly type = ActionTypes.UpdateEntrySuccess;

  constructor() {}
}

export class DetailEntry implements Action {
  readonly type = ActionTypes.DetailEntry;

  constructor() {}
}

export class DetailEntrySuccess implements Action {
  readonly type = ActionTypes.DetailEntry;

  constructor() {}
}

export type ActionsUnion = GetEntries |
GetEntriesSuccess |
CreateEntry |
CreateEntrySuccess |
DeleteEntry |
DeleteEntrySuccess |
UpdateEntry |
UpdateEntrySuccess |
DetailEntry |
DetailEntrySuccess;
