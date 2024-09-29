async function fetchRecipes(country) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
    const data = await response.json();
    return data.meals;
}

export default async function CountryRecipePage({ params }) {
    const { country } = params;
    const recipes = await fetchRecipes(country);

    return (
        <div>
            <h2>Recipes from {country}</h2>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.idMeal}>
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} width="100" />
                        <p>{recipe.strMeal}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}