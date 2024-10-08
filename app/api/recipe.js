export async function fetchRecipes(meal) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`);
    const data = await response.json();
    return data.meals;
}