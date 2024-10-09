"use client";

import { useEffect, useState } from "react";
import countriesData from './utils/countries.json';
import { fetchMeals } from "./api/meals";
import { fetchUserCountry } from "./api/geolocation";
import { useRouter } from 'next/navigation';
import MealsCard from "./components/cards/MealsCard";

export default function Home() {
  const [userCountry, setUserCountry] = useState(null);
  const [meals, setMeals] = useState([]);
  const router = useRouter();

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

  const getRandomMeal = async () => {
    const randomCountry = countriesData.countries[Math.floor(Math.random() * countriesData.countries.length)];
    const countryMeals = await fetchMeals(randomCountry.name);

    if (countryMeals && countryMeals.length > 0) {
      const randomRecipe = countryMeals[Math.floor(Math.random() * countryMeals.length)];
      router.push(`/countries/${randomCountry.name.toLowerCase()}/${randomRecipe.strMeal.toLowerCase()}`);
    }
  };

  return (
    <div>
      <section className="hero relative w-full bg-cover bg-center h-[40rem]" style={{ backgroundImage: 'url("/home-background.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex justify-center items-center w-full h-full">
          <div className="backdrop-blur-sm bg-black bg-opacity-40  rounded-3xl p-11 text-center mt-11">
            <h1 className="text-4xl font-bold text-white pt-0">Discover</h1>
            <h1 className="text-4xl font-bold text-white">Random</h1>
            <h1 className="text-4xl font-bold text-white mb-11">Meal</h1>
            <p className="text-white mb-6">New flavors await. <br/>Click to find your next favorite dish.</p>
            <button className="bg-warm-orange hover:bg-red-600 text-white py-2 px-4 rounded-full" onClick={() => getRandomMeal()}>Get Random Meal</button>
          </div>
         </div>
      </section>

      <section className="popular-recipes py-12">
        <div className="container mx-auto">
          <h2 className="text-l font-semibold text-left mb-2 text-white">Popular Recipes Near You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {meals.map(meal => (
              <MealsCard key={meal.idMeal} country={userCountry} meal={meal} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
