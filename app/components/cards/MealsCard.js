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
    <div className="relative group">
      <img 
        src={meal.strMealThumb} 
        alt={meal.strMeal}
        width={100}
        height={100}
        className="w-full object-cover rounded-t-3xl"
      />

      <div className='px-6 py-4 bg-warm-orange rounded-b-3xl'>
        <div className='font-bold text-md text-center mb-2 text-[#fcf9fe]'>
          {capitalizeFirstLetter(meal.strMeal)}
        </div>
      </div>

      <Link href={`/countries/${country}/${meal.strMeal}`}>
        <button className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
          View Recipe
        </button>
      </Link>
    </div>
  );
};

export default MealsCard;
