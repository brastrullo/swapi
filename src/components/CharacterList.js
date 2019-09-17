import React from 'react';

function CharacterList(props) {
  const {
    characters
  } = props;
  console.log(characters);
  const items = characters.map((el, i) => <li key={`${i}`}>{ el.char }</li>);
  
  return <ul>{ items }</ul>;
}

export default CharacterList;
