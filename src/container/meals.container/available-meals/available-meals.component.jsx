import React, {useReducer, useEffect} from 'react';

import {Card} from './../../../components';
import MealItem from '../meal-item.container/meal-item/meal-item.component';
import meals from '../../../api/meals.api';

import './available-meals.styles.css';

const mealsReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {meals: [], isLoading: true};
    case 'GET_MEALS':
      return {meals: action.value, isLoading: false};
    default:
      throw new Error(
        'This type of meal action is not specified ',
        action.type
      );
  }
};

const AvailableMeals = () => {
  const [mealList, dispatchMeals] = useReducer(mealsReducer, {
    meals: [],
    isLoading: true,
  });

  useEffect(() => {
    const getMeals = async () => {
      try {
        console.log('get meals is running');
        const response = await meals.get('meals.json');

        const data = response.data;
        let loadedMeals = [];

        for (const key in data) {
          if (!data.hasOwnProperty(key)) continue;
          loadedMeals.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          });
        }

        dispatchMeals({type: 'GET_MEALS', value: loadedMeals});
      } catch (error) {
        console.error(error);
      }
    };
    getMeals();
  }, []);

  const renderedMealItems = mealList.meals.map(
    ({id, name, description, price}) => {
      return (
        <MealItem
          key={id}
          id={id}
          name={name}
          description={description}
          price={price}
        ></MealItem>
      );
    }
  );

  console.log('meal list', mealList.meals);
  console.log('isLoading', mealList.isLoading);

  const renderedOnScreen = mealList.isLoading ? (
    <p style={{color: 'white'}}>Loading..</p>
  ) : (
    <Card>
      <ul>{renderedMealItems}</ul>
    </Card>
  );

  console.log('renderedOnScreen', renderedOnScreen);

  return <div className="meals">{renderedOnScreen}</div>;
};

export default AvailableMeals;
