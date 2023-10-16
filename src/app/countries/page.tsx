/* eslint-disable @next/next/no-img-element */
'use client'
// pages/countries/index.tsx
import { useEffect, useState } from 'react';

interface Language {
  code: string;
  name: string;
}

interface Currency {
  name: string;
  symbol: string;
}

interface Flags {
  png: string;
  svg: string;
}

interface Country {
  name: string;
  emoji: string;
  currencies: Record<string, Currency>;
  languages: Language[];
  flags: Flags;
}

const CountriesPage = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetch('/api/countries')
      .then(response => response.json())
      .then(data => setCountries(data));
  }, []);

  return (
    <div className=" min-h-screen" data-theme="business">
      <h1 className="text-center py-8">Countries</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {countries.map((country: Country, index: number) => (
          <div key={index} className="p-6 rounded-lg shadow-lg">
            <h2 className="mb-4">{country.name}</h2>
            <p className="mb-2">
              <strong>Flag:</strong> {country.emoji}
            </p>
            <p className="mb-2">
              <strong>Currency:</strong>
              {country.currencies &&
                Object.entries(country.currencies)
                  .map(([code, curr]) => `${curr.name} (${curr.symbol})`)
                  .join(', ')}
            </p>

            <p className="mb-2">
              <strong>Languages:</strong>{' '}
              {country.languages.map((lang) => lang.name).join(', ')}
            </p>
            <p className="mb-2">
              <img
                src={country.flags.png}
                alt={`${country.name} flag`}
                className="w-full h-auto"
              />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountriesPage;
