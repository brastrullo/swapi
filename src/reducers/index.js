import * as types from '../actions/actionTypes';
import { combineReducers } from 'redux';



export const characters = (state = [], action) => {
  switch(action.type) {
    case types.GET_CHARACTERS:
      return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  characters
});

export default rootReducer;
