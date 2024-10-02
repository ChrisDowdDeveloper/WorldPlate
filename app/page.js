"use client";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import countriesData from './utils/countries.json';
import CountryCard from "./components/cards/CountryCard";
import { fetchMeals } from "./api/meals";
import { fetchUserCountry } from "./api/geolocation";
import MealsCard from "./components/cards/MealsCard";
import Slider from "react-slick";
import NextArrow from "./components/ui/NextArrow";
import PrevArrow from "./components/ui/PrevArrow";

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

  const sliderSettings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          centerMode: false
        }
      }
    ]
  };

  return (
    <div>
      {meals ? (
        <Slider {...sliderSettings}>
          {meals.map(meal => (
            <MealsCard key={meal.idMeal} meal={meal} />
          ))}
        </Slider>
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

