import React from 'react';

import './input.styles.css';

const Input = () => {
  return (
    <div className="input">
      <label htmlFor="amount">Amount</label>
      <input type="text" name="amount" />
    </div>
  );
};

export default Input;
