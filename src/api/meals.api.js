import axios from 'axios';

const meals = axios.create({
  baseURL: 'https://max-tasks-app-default-rtdb.firebaseio.com/meals.json',
});

export default meals;
