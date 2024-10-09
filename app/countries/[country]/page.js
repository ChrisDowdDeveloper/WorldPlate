import { fetchMeals } from '@/app/api/meals';
import MealsCard from '@/app/components/cards/MealsCard';

export default async function CountryMealsPage({ params }) {
    const { country } = params;
    const meals = await fetchMeals(country);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {meals.map(meal => (
                <MealsCard key={meal.idMeal} meal={meal} country={country} />
            ))}
        </div>
    );
}
