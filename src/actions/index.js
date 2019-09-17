import * as types from './actionTypes';


export const fetchChar = (payload) => async (dispatch, getState) => {
  const res = await fetch('/people')
  const data = await res.json();
  const chars = data.results.map(el => ({
    name: el.name,
    birth_year: el.birth_year,
    height: el.height,
    mass: el.mass
  }))
  dispatch(getCharacters(chars));
}

export const getCharacters = (payload) => ({
  type: types.GET_CHARACTERS,
  payload
})