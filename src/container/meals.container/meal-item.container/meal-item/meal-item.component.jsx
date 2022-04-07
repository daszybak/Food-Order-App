import React from 'react';

import MealItemForm from '../meal-item-form/meal-item-form.component';

import './meal-item.styles.css';

const MealItem = () => {
  return (
    <div className="meal">
      <div>
        <h3>Meal Name</h3>
        <p className="description">Description</p>
        <p className="price">Price</p>
      </div>
      <MealItemForm />
    </div>
  );
};

export default MealItem;
