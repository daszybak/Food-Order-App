import React, {useContext} from 'react';
import CartContext from '../../../../store/cart';

import MealItemForm from '../meal-item-form/meal-item-form.component';

import './meal-item.styles.css';

const MealItem = ({meal}) => {
  const {id, name, description, price} = meal;
  const {addItem} = useContext(CartContext);

  const handleAddItems = (itemAmount) => {
    addItem({
      id,
      name,
      description,
      price,
      amount: itemAmount,
    });
  };

  return (
    <div className="meal">
      <div>
        <h3>{name}</h3>
        <p className="description">{description}</p>
        <p className="price">{price}</p>
      </div>
      <MealItemForm addItems={handleAddItems} />
    </div>
  );
};

export default MealItem;
