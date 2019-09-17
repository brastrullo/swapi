import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import CharacterList from './CharacterList';

function Container(props) {
  const {
    characters
  } = props;

  useEffect(() => {
    const { fetchChar } = props.action;
    fetchChar()
  },[props.action])
  
  const onClickPrevious = () => console.log('prev')
  const onClickNext = () => console.log('next')
  return (
    <div>
      <h1>SWAPI</h1>
      <CharacterList characters={characters} />
      <button onClick={onClickPrevious}>previous</button>
      <button onClick={onClickNext}>next</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);

