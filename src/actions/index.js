import * as types from './actionTypes';


export const fetchChars = (payload) => async (dispatch, getState) => {
  const fetchPeople = await fetch('/people');
  const peopleData = await fetchPeople.json();
  const fetchShips = await fetch('/starships');
  const shipsData = await fetchShips.json();
  const shipsArr = await shipsData.results.map(el => ({
    type: 'starship',
    name: el.name
  }))
  const peopleArr = peopleData.results.map(el => ({
      type: 'person',
      name: el.name,
      birth_year: el.birth_year,
      height: el.height,
      mass: el.mass
    }))
  peopleArr.forEach((el,i) => {
    const starship = shipsArr.shift()
    if ((i + 1) % 8 === 0 && i !== 0) {
      peopleArr.splice(i, 0, starship)
    }
  })
  dispatch(getCharacters(peopleArr));
}

export const nextPage = (payload) => ({
  type: types.NEXT_PAGE,
  payload
})
export const previousPage = (payload) => ({
  type: types.PREVIOUS_PAGE,
  payload
})
export const getCharacters = (payload) => ({
  type: types.GET_CHARACTERS,
  payload
})