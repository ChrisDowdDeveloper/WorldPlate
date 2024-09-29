import { fetchMeals } from '@/app/api/meals';
import React from 'react'

//TODO - Get this page working
export default async function MealPage({ params }) {
    const { meal } = params;
    const ingredients = fetchMeals(meal);

    return (
        <div>
            Ingredients Page
        </div>
    )
}