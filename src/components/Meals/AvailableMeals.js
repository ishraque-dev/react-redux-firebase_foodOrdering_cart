import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import style from './availableMeals.module.css';
import MealItem from './MealItem';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch(
        'https://react-foods-28c4d-default-rtdb.firebaseio.com/meals.json'
      );
      const responseData = await response.json();

      const data = [];
      for (const key in responseData) {
        data.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(data);
      setIsLoading(false);
    };
    fetchMeals();
  }, []);
  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        price={meal.price}
        description={meal.description}
      />
    );
  });
  return (
    <section>
      <Card>
        {isLoading && <LoadingSpinner />}
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
