import Link from 'next/link';
import React from 'react';

const MealsCard = ({ meal, country }) => {
  
  if (!meal) {
    return <p>Loading meal...</p>;
  }

  const capitalizeFirstLetter = (meal) => {
    return meal.split(/(\s|-)/).map((meal, index) => {
      if (index % 2 === 0) {
        return meal.charAt(0).toUpperCase() + meal.slice(1);
      } else {
        return meal;
      }
    }).join('');
  }

  return (
    <div className='max-w-sm rounded-3xl overflow-hidden shadow-lg bg-warm-orange p-4 w-72 h-96 flex flex-col justify-between items-center'>
      <Link href={`/${country}/${meal.strMeal}`}>
        <img 
          src={meal.strMealThumb} 
          alt={meal.strMeal} 
          width={100} 
          height={100}
          className='w-full'
        />
        <div className='px-6 py-4'>
          <div className='font-bold text-md text-center mb-2 text-[#fcf9fe]'>{capitalizeFirstLetter(meal.strMeal)}</div>
        </div>
      </Link>
    </div>
  );
};

export default MealsCard;
