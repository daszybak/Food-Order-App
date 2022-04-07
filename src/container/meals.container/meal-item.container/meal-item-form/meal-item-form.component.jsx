import React from 'react';
import {useState, useRef} from 'react';

import {Input} from '../../../../components';

import './meal-item-form.styles.css';

const MealItemForm = ({addItems}) => {
  const [validInputState, setValidInputState] = useState(true);
  const inputRef = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (
      inputRef.current &&
      (inputRef.current.value < 1 || inputRef.current.value > 5)
    ) {
      setValidInputState(false);
      console.log(validInputState);
      return;
    } else {
      addItems(inputRef.current.value);
      setValidInputState(true);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleOnSubmit}>
        <Input inputRef={inputRef} />
        <div>
          <button>+ Add</button>
        </div>
      </form>
      <p>
        {!validInputState &&
          'Invalid input. Please enter a number greater than 0 and smaller than 6'}
      </p>
    </div>
  );
};

export default MealItemForm;
