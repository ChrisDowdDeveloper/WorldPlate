import MealsCard from "@/app/components/cards/MealsCard";
import { fetchMeals } from "../api/meals";

export default async function CountryRecipePage({ params }) {
    const { country } = params;
    const meals = await fetchMeals(country);

    if (!meals) {
        return <p>No Meals found for {country}.</p>;
    }

    return (
        <div>
            <h2>Meals from {country}</h2>
            <ul>
                {meals.map((meal) => (
                    <MealsCard key={meal.idMeal} meal={meal} country={country} />
                ))}
            </ul>
        </div>
    );
}
