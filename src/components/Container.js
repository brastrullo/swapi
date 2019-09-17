import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import CharacterList from './CharacterList';

function Container(props) {
  const { nextPage, previousPage } = props.action;
  const {
    page,
    characters
  } = props;
  useEffect(() => {
    const { fetchChars } = props.action;
    fetchChars()
  },[props.action])
  
  const onClickPrevious = () => previousPage()
  const onClickNext = () => nextPage()
  return (
    <div>
      <h1>SWAPI</h1>
      <CharacterList characters={characters} />
      <button onClick={onClickPrevious} disabled={page === 1}>previous</button>
      <button onClick={onClickNext}>next</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
    page: state.page
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);

