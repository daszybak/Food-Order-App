import React, {useReducer, useEffect} from 'react';

import {Card} from './../../../components';
import MealItem from '../meal-item.container/meal-item/meal-item.component';
import meals from '../../../api/meals.api';

import './available-meals.styles.css';

const mealsReducer = (state, action) => {
  switch (action.type) {
    case 'GET_MEALS':
      return action.value;
    default:
      throw new Error(
        'This type of meal action is not specified ',
        action.type
      );
  }
};

const AvailableMeals = () => {
  const [mealList, dispatchMeals] = useReducer(mealsReducer, []);

  useEffect(() => {
    const getMeals = async () => {
      const response = await meals.get();
      dispatchMeals({type: 'GET_MEALS', value: response.data});
    };
    getMeals();
  }, []);

  let RenderedMealItems = [];

  for (const key in mealList) {
    if (!mealList.hasOwnProperty(key)) continue;
    RenderedMealItems.push(
      <li key={key}>
        <MealItem meal={mealList[key]} />
      </li>
    );
  }

  return (
    <div className="meals">
      <Card>
        <ul>{RenderedMealItems}</ul>
      </Card>
    </div>
  );
};

export default AvailableMeals;
