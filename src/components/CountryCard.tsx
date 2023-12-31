// src/components/CountryCard.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Country } from '@/utils/types';

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <div className="country-card">
      <Link href={`/app/countries/${country.code}`}>
        <div className="relative w-full h-64 cursor-pointer">
          <Image
            src={country.flags.png}
            alt={`${country.name.common} flag`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;
