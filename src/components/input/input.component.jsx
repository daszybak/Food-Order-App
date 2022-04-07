import React from 'react';

import './input.styles.css';

const Input = ({inputRef}) => {
  return (
    <div className="input">
      <label htmlFor="amount">Amount</label>
      <input type="text" name="amount" ref={inputRef} min="1" max="10" />
    </div>
  );
};

export default Input;
