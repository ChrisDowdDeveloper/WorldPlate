import { fetchRecipes } from '@/app/api/recipe';
import RecipeCard from '@/app/components/cards/RecipeCard';
import React from 'react'

export default async function MealPage({ params }) {
    const { meal } = params;
    const meals = await fetchRecipes(meal);
    
    if(!meals) {
        return <p>No ingredients found</p>
    }
    return (
        <div>
                <ul>
                    {meals.map(meal => (
                        <RecipeCard key={meal.idMeal} meal={meal} />
                    ))}
                </ul>
        </div>
    )
}