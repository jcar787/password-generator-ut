import React from 'react';

type PasswordGeneratorViewProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  password: string;
};

const PasswordGeneratorView = (props: PasswordGeneratorViewProps) => {
  const { onClick, password } = props;
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">Password Generator</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <input type="checkbox" name="" id="" />
          <label>Special Characters</label>
        </div>
        <div className="col-3">
          <input type="checkbox" name="" id="" />
          <label>Lowercase</label>
        </div>
        <div className="col-3">
          <input type="checkbox" name="" id="" />
          <label>UpperCase</label>
        </div>
        <div className="col-3">
          <label>Password Length:</label>
          <input type="number" name="" id="" />
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
