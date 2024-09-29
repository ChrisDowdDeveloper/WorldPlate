"use client";

import { useEffect, useState } from "react";
import countriesData from './utils/countries.json';
import CountryCard from "./components/CountryCard";
import RecipeCard from "./components/RecipeCard";
import { fetchRecipes } from "./api/recipes";
import { fetchUserCountry } from "./api/geolocation";

export default function Home() {
  const [userCountry, setUserCountry] = useState(null);
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async(position) => {
      const { latitude, longitude } = position.coords;
      
      const countryName = await fetchUserCountry(latitude, longitude);
      setUserCountry(countryName);

      const foundCountry = countriesData.countries.find(country => {
        return country.geo === countryName;
      });

      if(foundCountry) {
        const countryRecipes = await fetchRecipes(foundCountry.name);
        setRecipes(countryRecipes);
      }
    })
  }, []);

  //TODO - Turn this into a button
  const getRandomMeal = async() => {
    const randomCountry = countriesData.countries[Math.floor(Math.random() * countriesData.countries.length)];
    const countryRecipes = await fetchRecipes(randomCountry.name);

    if(countryRecipes && countryRecipes.length > 0) {
      const randomMeal = countryRecipes[Math.floor(Math.random() * countryRecipes.length)];

      router.push(`/recipes/${randomCountry.name.toLowerCase()}/${randomMeal.strMeal.toLowerCase()}`);
    }
  }

  return (
    <div>
      <h2>Select a Country to explore popular recipes!</h2>
      {recipes ? (
        <ul>
          {recipes.map(recipe => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </ul>
      ) : (
        userCountry && <p>Loading recipes for {userCountry}...</p>
      )}
      <ul>
        {countriesData.countries.map(country => (
          <CountryCard key={country.id} country={country} />
        ))}
      </ul>
    </div>
  );
}

