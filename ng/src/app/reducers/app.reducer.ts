import { ActionTypes } from '../actions/app.actions';
import { AppState } from '../state/app.state';
import { ActionsUnion } from '../actions/app.actions';

const initialState: AppState = {
  entries: [
    {
      id: '',
      dateCreated: new Date(),
      dateUpdated: new Date(),
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zip: 0,
      country: ''
    }
  ]
};

export const selectEntries = (state: AppState) => state.entries;

export function reducer(
  state = initialState,
  action: ActionsUnion
): AppState {
  switch (action.type) {
    case ActionTypes.GetEntries:
      return {
        ...state,
        entries: action.payload
      };

    default:
      return state;
  }
}
