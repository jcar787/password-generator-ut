import React, { useReducer } from 'react';
import PasswordGeneratorView from './PasswordGenerator.view';

type State = {
  length: number;
  lowercase: boolean;
  uppercase: boolean;
  numeric: boolean;
  specialCharacter: boolean;
  password: string;
};

type Action = {
  type: string;
};

const initialState = {
  length: 8,
  lowercase: false,
  uppercase: false,
  numeric: false,
  specialCharacter: false,
  password: '',
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}

const PasswordGeneratorContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state, dispatch);
  const onClick = () => {
    console.log('Button Clicked');
  };
  return <PasswordGeneratorView onClick={onClick} password={state.password} />;
};

export default PasswordGeneratorContainer;
