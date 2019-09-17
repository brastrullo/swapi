import * as types from '../actions/actionTypes';
import { combineReducers } from 'redux';

export const characters = (state = [
  { char: 'Luke' },
  { char: 'Chewy' },
], action) => {
  switch(action.type) {
    case types.FETCH_CHARACTERS:
      return [];
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  characters
});

export default rootReducer;
