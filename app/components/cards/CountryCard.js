import React from 'react'
import Link from 'next/link';

const CountryCard = ({ country }) => {
  return (
    <div className="relative group rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div key={country.id} className="block">
          <Link href={`/countries/${country.name.toLowerCase()}`}>
              <img
                src={country.image}
                alt={`${country.abbreviation}'s flag`}
                className="w-full h-40 object-cover mx-auto"
                width={50}
                height={40}
              />
            <div className="p-1 bg-white rounded-b-lg text-center">
              <h2 className="font-bold text-lg text-black">{country.abbreviation}</h2>
            </div>
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <span className="text-lg font-semibold">Explore Recipes</span>
            </div>
          </Link>
      </div>
    </div>
  )
}

export default CountryCard