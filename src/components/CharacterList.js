import React from 'react';

function CharacterList(props) {
  const {
    characters
  } = props;
  console.log(characters);
  const displayList = (list = []) =>
    list.map((char, i) => (
      <li key={`${i}`}>
        <p>{ char.name }</p>
        <p>{ char.birth_year }</p>
        <p>{ char.height }</p>
        <p>{ char.mass }</p>
      </li>
    ));
  
  return <ul>{ displayList(characters) }</ul>;
}

export default CharacterList;
