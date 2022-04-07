import React from 'react';

import {Input} from '../../../../components';

import './meal-item-form.styles.css';

const MealItemForm = () => {
  return (
    <div>
      <form className="form">
        <Input />
        <div>
          <button>+ Add</button>
        </div>
      </form>
    </div>
  );
};

export default MealItemForm;
