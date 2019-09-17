import React from 'react';

function CharacterList(props) {
  const {
    characters
  } = props;
  console.log(characters);
  const displayList = (list = []) =>
    list.map((data, i) => (
      <li key={`${i}`}>
        { data.type === 'person' ? (
          <>
            <p>
              <label>Name: </label>
              <span>{data.name}</span>
            </p>
            <p>
              <label>Birth Year: </label>
              <span>{data.birth_year}</span>
            </p>
            <p>
              <label>Height: </label>
              <span>{data.height} cm</span>
            </p>
            <p>
              <label>Mass: </label>
              <span>{data.mass} kg</span>
            </p>
          </>
        ) : (
          <p>
            <b>
              <label>Starship Name: </label>
              <span>{data.name} </span>
            </b>
          </p>
        )}
      </li>
    ));
  
  return <ul>{ displayList(characters) }</ul>;
}

export default CharacterList;
