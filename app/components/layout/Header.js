"use client";

import Link from 'next/link';
import React from 'react';
import countriesData from '../../utils/countries.json'
import { fetchMeals } from '../../api/meals';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();

  const getRandomMeal = async () => {
    const randomCountry = countriesData.countries[Math.floor(Math.random() * countriesData.countries.length)];
    const countryMeals = await fetchMeals(randomCountry.name);

    if (countryMeals && countryMeals.length > 0) {
      const randomRecipe = countryMeals[Math.floor(Math.random() * countryMeals.length)];
      router.push(`/${randomCountry.name.toLowerCase()}/${randomRecipe.strMeal.toLowerCase()}`);
    }
  };

  return (
    <header style={headerStyle}>
      <nav>
        <ul style={navListStyle}>
          <li><Link href="/" style={linkStyle}>Home</Link></li>
          <li>
            <button style={linkButtonStyle} onClick={getRandomMeal}>
              Get Random Meal
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyle = {
  padding: '10px',
  background: '#333',
  color: '#fff',
  textAlign: 'center'
};

const navListStyle = {
  display: 'flex',
  justifyContent: 'center',
  listStyle: 'none',
  padding: 0,
};

const linkStyle = {
  margin: '0 15px',
  textDecoration: 'none',
  color: '#fff',
};

const linkButtonStyle = {
  background: 'none',
  border: 'none',
  color: '#fff',
  cursor: 'pointer',
  textDecoration: 'underline',
};

export default Header;
