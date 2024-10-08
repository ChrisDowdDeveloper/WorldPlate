export async function fetchMeals(country) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
    const data = await response.json();
    return data.meals;
}