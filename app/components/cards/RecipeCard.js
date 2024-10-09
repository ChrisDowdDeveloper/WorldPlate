import React from 'react';

const RecipeCard = ({ meal }) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== '') {
      ingredients.push(`${measure ? measure : ''} ${ingredient}`);
    }
  }

  const steps = meal.strInstructions
    ? meal.strInstructions.split(/(?:\r\n|\r|\n|\.)\s*/).filter(step => step.trim() !== '')
    : [];

  const youtubeUrl = meal.strYoutube;
  const youtubeId = youtubeUrl ? youtubeUrl.split('v=')[1] : null;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-6xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">{meal.strMeal}</h1>
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="w-full lg:w-2/3 mb-8 lg:mb-0">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full rounded-lg shadow-lg mb-6"
          />

          <div className="flex justify-between text-gray-600 mb-4">
            <p><strong>Category:</strong> {meal.strCategory}</p>
            <p><strong>Area:</strong> {meal.strArea}</p>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Ingredients</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Instructions</h3>
          {steps.map((step, index) => (
            <li key={index}><br /> {step} <br /></li>
          ))}

          {meal.strTags && (
            <p className="mt-6 text-gray-600"><strong>Tags:</strong> {meal.strTags.split(',').join(', ')}</p>
          )}
        </div>

        {youtubeId && (
          <div className="w-full lg:w-1/3 lg:flex lg:justify-center">
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-center">Watch the Recipe Video</h3>
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title="YouTube video player"
                className="rounded-lg shadow-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;
