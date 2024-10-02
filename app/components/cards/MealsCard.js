import Link from 'next/link';
import React from 'react';

const MealsCard = ({ meal, country }) => {
  
  if (!meal) {
    return <p>Loading meal...</p>;
  }

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <Link href={`/${country}/${meal.strMeal}`}>
        <img 
          src={meal.strMealThumb} 
          alt={meal.strMeal} 
          width={100} 
          height={100}
          className='w-fit'
        />
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>{meal.strMeal}</div>
        </div>
      </Link>
    </div>
  );
};

export default MealsCard;
