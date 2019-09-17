import React from 'react';

function CharacterList(props) {
  const {
    characters
  } = props;
  console.log(characters);
  const displayList = (list = []) =>
    list.map((char, i) => (
      <li key={`${i}`}>
        <p>
          <label>Name: </label>
          <span>{char.name}</span>
        </p>
        <p>
          <label>Birth Year: </label>
          <span>{char.birth_year}</span>
        </p>
        <p>
          <label>Height: </label>
          <span>{char.height} cm</span>
        </p>
        <p>
          <label>Mass: </label>
          <span>{char.mass} kg</span>
        </p>
      </li>
    ));
  
  return <ul>{ displayList(characters) }</ul>;
}

export default CharacterList;
