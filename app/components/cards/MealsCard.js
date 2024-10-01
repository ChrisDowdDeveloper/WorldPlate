import Link from 'next/link';
import React from 'react';

const MealsCard = ({ meal, country }) => {
  
  if (!meal) {
    return <p>Loading meal...</p>;
  }

  return (
    <div>
      <Link href={`/${country}/${meal.strMeal}`}>
        <h4>{meal.strMeal}</h4>
        <img 
          src={meal.strMealThumb} 
          alt={meal.strMeal} 
          width={100} 
          height={100} 
        />
      </Link>
    </div>
  );
};

export default MealsCard;
