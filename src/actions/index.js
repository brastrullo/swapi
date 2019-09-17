import * as types from './actionTypes';

export const fetchCharacters = (payload) => ({
  type: types.FETCH_CHARACTERS,
  payload
})