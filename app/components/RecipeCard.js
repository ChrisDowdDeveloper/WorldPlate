import React from 'react';

const RecipeCard = ({ recipe }) => {
  
  if (!recipe) {
    return <p>Loading recipe...</p>;
  }

  return (
    <div>
      <h4>{recipe.strMeal}</h4>
      <img 
        src={recipe.strMealThumb} 
        alt={recipe.strMeal} 
        width={100} 
        height={100} 
      />
    </div>
  );
};

export default RecipeCard;
