import RecipeCard from "@/app/components/RecipeCard";
import { fetchRecipes } from "@/app/api/recipes";

export default async function CountryRecipePage({ params }) {
    const { country } = params;
    const recipes = await fetchRecipes(country);

    if (!recipes) {
        return <p>No recipes found for {country}.</p>;
    }

    return (
        <div>
            <h2>Recipes from {country}</h2>
            <ul>
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.idMeal} recipe={recipe} />
                ))}
            </ul>
        </div>
    );
}
