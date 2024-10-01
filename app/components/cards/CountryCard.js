import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const CountryCard = ({ country }) => {
  return (
    <div>
      <li key={country.id}>
          <Link href={`/${country.name.toLowerCase()}`}>
              <Image
                src={country.image}
                width={150}
                height={50}
                alt={`${country.abbreviation}'s flag`}
                priority={true}
                className="flag-image"
              />

            {country.abbreviation}
          </Link>
      </li>
    </div>
  )
}

export default CountryCard