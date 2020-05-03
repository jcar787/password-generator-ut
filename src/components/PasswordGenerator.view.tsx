import React from 'react';
import { State } from './PasswordGenerator.container';

type PasswordGeneratorViewProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  state: State;
  toggleLowercase: (event: React.ChangeEvent<HTMLInputElement>) => void;
  toggleNumeric: (event: React.ChangeEvent<HTMLInputElement>) => void;
  toggleUppercase: (event: React.ChangeEvent<HTMLInputElement>) => void;
  toggleSpecialCharacter: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePasswordLength: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const PasswordGeneratorView = (props: PasswordGeneratorViewProps) => {
  const {
    onClick,
    toggleLowercase,
    toggleNumeric,
    toggleSpecialCharacter,
    toggleUppercase,
    onChangePasswordLength,
    state,
  } = props;
  const {
    password,
    numeric,
    specialCharacter,
    lowercase,
    uppercase,
    length,
  } = state;
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">Password Generator</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <input
            type="checkbox"
            id="specialCharacter"
            onChange={toggleSpecialCharacter}
            checked={specialCharacter}
          />
          <label>Special Characters</label>
        </div>
        <div className="col-2">
          <input
            type="checkbox"
            id="lowercase"
            onChange={toggleLowercase}
            checked={lowercase}
          />
          <label>Lowercase</label>
        </div>
        <div className="col-2">
          <input
            type="checkbox"
            id="uppercase"
            onChange={toggleUppercase}
            checked={uppercase}
          />
          <label>Uppercase</label>
        </div>
        <div className="col-2">
          <input
            type="checkbox"
            id="numeric"
            onChange={toggleNumeric}
            checked={numeric}
          />
          <label>Numeric</label>
        </div>
        <div className="col-4">
          <label>Password Length:</label>
          <input
            type="number"
            id="length"
            onChange={onChangePasswordLength}
            value={length}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="text-center">
            <button className="btn btn-primary" onClick={onClick}>
              Generate Password
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="text-center">{password}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordGeneratorView;
