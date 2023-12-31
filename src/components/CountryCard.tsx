// src/components/CountryCard.tsx
import Link from 'next/link';
import React from 'react';
import { Country } from '@/utils/types'; // Adjust the import path


interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <div className="country-card">
      <h3>{country.name.common}</h3>
      {/* Other country information */}
      <Link href={`/app/countries/${country.code}/page`}>
        <a>More about {country.name.common}</a>
      </Link>
    </div>
  );
};

export default CountryCard;
