import React, { useReducer } from 'react';
import PasswordGeneratorView from './PasswordGenerator.view';

export interface State {
  length: number;
  lowercase: boolean;
  uppercase: boolean;
  numeric: boolean;
  specialCharacter: boolean;
  password: string;
}

interface ActionPassword {
  type: 'password';
  password: string;
}

interface ActionLength {
  type: 'length';
  length: number;
}

interface ActionToggleLowercase {
  type: 'toggleLowercase';
}
interface ActionToggleUpperCase {
  type: 'toggleUppercase';
}
interface ActionToggleNumeric {
  type: 'toggleNumeric';
}
interface ActionToggleSpecialCharacter {
  type: 'toggleSpecialCharacter';
}

type Action =
  | ActionPassword
  | ActionToggleLowercase
  | ActionToggleNumeric
  | ActionToggleSpecialCharacter
  | ActionToggleUpperCase
  | ActionLength;

const initialState: State = {
  length: 8,
  lowercase: false,
  uppercase: false,
  numeric: false,
  specialCharacter: false,
  password: '',
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'toggleSpecialCharacter':
      return { ...state, specialCharacter: !state.specialCharacter };
    case 'toggleLowercase':
      return { ...state, lowercase: !state.lowercase };
    case 'toggleUppercase':
      return { ...state, uppercase: !state.uppercase };
    case 'toggleNumeric':
      return { ...state, numeric: !state.numeric };
    case 'length':
      return { ...state, length: action.length };
    case 'password':
      return { ...state, password: action.password };
    default:
      return state;
  }
}

const PasswordGeneratorContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onClick = () => {
    console.log('Button Clicked');
  };
  const toggleLowercase = () => {
    dispatch({
      type: 'toggleLowercase',
    });
  };
  const toggleUppercase = () => {
    dispatch({
      type: 'toggleUppercase',
    });
  };
  const toggleNumeric = () => {
    dispatch({
      type: 'toggleNumeric',
    });
  };
  const toggleSpecialCharacter = () => {
    dispatch({
      type: 'toggleSpecialCharacter',
    });
  };

  const onChangePasswordLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const rawNumber = e.target.value;
    const length = rawNumber === '' ? 8 : Number.parseInt(e.target.value);
    if (length >= 8 && length <= 128) {
      dispatch({
        type: 'length',
        length,
      });
    }
  };
  return (
    <PasswordGeneratorView
      onClick={onClick}
      state={state}
      toggleLowercase={toggleLowercase}
      toggleUppercase={toggleUppercase}
      toggleNumeric={toggleNumeric}
      toggleSpecialCharacter={toggleSpecialCharacter}
      onChangePasswordLength={onChangePasswordLength}
    />
  );
};

export default PasswordGeneratorContainer;
