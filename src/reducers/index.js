import * as types from '../actions/actionTypes';
import { combineReducers } from 'redux';


export const page = (state = 1, action) => {
  switch(action.type) {
    case types.CURRENT_PAGE:
      return state;
    case types.NEXT_PAGE:
      return state++;
    case types.PREVIOUS_PAGE:
      return state--;
    default:
      return state;
  }
}

export const characters = (state = [], action) => {
  switch(action.type) {
    case types.GET_CHARACTERS:
      return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  characters,
  page
});

export default rootReducer;
