import React from 'react';

import './input.styles.css';

const Input = ({inputRef}) => {
  return (
    <div className="input">
      <label htmlFor="amount">Amount</label>
      <input type="text" name="amount" ref={inputRef} />
    </div>
  );
};

export default Input;
