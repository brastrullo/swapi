import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import CharacterList from './CharacterList';

function Container(props) {
  const { fetchChar } = props.action;
  const {
    characters
  } = props;

  useEffect(() => {
    fetchChar()
  },[])
  
  return (
    <div>
      <h1>SWAPI</h1>
      <CharacterList characters={characters} />
    </div>
  );
}

const mapStateToProps = (state, prop) => {
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

