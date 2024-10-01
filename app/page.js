"use client";

import { useEffect, useState } from "react";
import countriesData from './utils/countries.json';
import CountryCard from "./components/cards/CountryCard";
import { fetchMeals } from "./api/meals";
import { fetchUserCountry } from "./api/geolocation";
import MealsCard from "./components/cards/MealsCard";

export default function Home() {
  const [userCountry, setUserCountry] = useState(null);
  const [meals, setMeals] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async(position) => {
      const { latitude, longitude } = position.coords;
      
      const countryName = await fetchUserCountry(latitude, longitude);
      setUserCountry(countryName);

      const foundCountry = countriesData.countries.find(country => {
        return country.geo === countryName;
      });

      if(foundCountry) {
        const countryMeals = await fetchMeals(foundCountry.name);
        setMeals(countryMeals);
      }
    })
  }, []);

  return (
    <div>
      <h2>Select a Country to explore popular recipes!</h2>
      {meals ? (
        <ul>
          {meals.map(meal => (
            <MealsCard key={meal.idMeal} meal={meal} />
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

