"use client";

import { useEffect, useState } from "react";
import countriesData from './utils/countries.json';
import CountryCard from "./components/cards/CountryCard";
import { fetchMeals } from "./api/meals";
import { fetchUserCountry } from "./api/geolocation";
import Carousel from "./components/ui/Carousel";

export default function Home() {
  const [userCountry, setUserCountry] = useState(null);
  const [meals, setMeals] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const countryName = await fetchUserCountry(latitude, longitude);
      setUserCountry(countryName);

      const foundCountry = countriesData.countries.find(country => country.geo === countryName);

      if (foundCountry) {
        const countryMeals = await fetchMeals(foundCountry.name);
        setMeals(countryMeals);
      }
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center">
      {meals ? (
        <div className="w-full max-w-screen-lg mx-auto px-4">
          <h1>Popular Meals from {userCountry}</h1>
          <Carousel meals={meals} />
        </div>
      ) : (
        userCountry && <p>Loading recipes for {userCountry}...</p>
      )}

      <h1>Don't see any you like? Pick a different country below!</h1>
      <ul>
        {countriesData.countries.map((country) => (
          <CountryCard key={country.id} country={country} />
        ))}
      </ul>
    </div>
  );
}
