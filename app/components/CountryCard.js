import React from 'react'
import Link from 'next/link';

const CountryCard = ({ country }) => {
  return (
    <li key={country.id}>
        <Link href={`/recipes/${country.name.toLowerCase()}`}>
            {country.abbreviation}
            <img 
              src={country.image} 
              width={50} 
              height={50} 
              alt={`${country.abbreviation}'s flag`} 
            />
        </Link>
    </li>
  )
}

export default CountryCard