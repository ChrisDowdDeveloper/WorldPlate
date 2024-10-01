import React from 'react'

const RecipeCard = ({ meal }) => {

  const ingredients = [];
  for(let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if(ingredient && ingredient.trim() !== '') {
      ingredients.push(`${measure ? measure: ''} ${ingredient}`)
    }
  }

  const steps = meal.strInstructions
    ? meal.strInstructions.split(/(?:\r\n|\r|\n|\.)\s*/).filter(step => step.trim() !== '')
    : [];


  const youtubeUrl = meal.strYoutube;
  const youtubeId = youtubeUrl ? youtubeUrl.split('v=')[1] : null;

  return (
    <div>
      <h1>{meal.strMeal}</h1>
      <img 
        src={meal.strMealThumb}
        alt={meal.strMeal} 
        width={300}
      />

      <p><strong>Category:</strong> {meal.strCategory}</p>
      <p><strong>Area:</strong> {meal.strArea}</p>

      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h3>Instructions</h3>
      <ol>
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      {meal.strTags && (
        <p><strong>Tags:</strong> {meal.strTags.split(',').join(', ')}</p>
      )}

      {youtubeId && (
        <div>
          <h3>Watch the Recipe Video</h3>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  )
}

export default RecipeCard