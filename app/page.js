"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import countriesData from './utils/countries.json';
import CountryCard from "./components/CountryCard";

export default function Home() {
  const [userCountry, setUserCountry] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async(position) => {
      const { latitude, longitude } = position.coords;
      const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
      const location = await response.json();
      console.log(location)
      setUserCountry(location.countryName);
    })
  }, []);

  console.log(countriesData.countries)

  return (
    <div>
      <h2>Select a Country to explore popular recipes!</h2>
      {userCountry && <p>Your detected country: {userCountry}</p>}
      <ul>
        {countriesData.countries.map(country => (
          <CountryCard key={country.id} country={country} />
        ))}
      </ul>
    </div>
  );
}

