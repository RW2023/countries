/* eslint-disable @next/next/no-img-element */
// src/app/countries/page.tsx
'use client'
import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading';  // Adjust the path as necessary

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
  currencies: Record<string, Currency> | null;
  languages: Language[];
  flags: Flags;
}

const CountriesPage = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/countries')
      .then(response => response.json())
      .then(data => {
        setCountries(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen" data-theme="business">
      <h1 className="text-center py-8 text-4xl">Countries</h1>
      {loading ? (
        <Loading text="countries" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {countries.map((country: Country, index: number) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg"
              data-theme="luxury"
            >
              <h2 className="mb-4 font-sans text-3xl text-center font-bold">
                {country.name}
              </h2>

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
                <strong>Flag:</strong> {country.emoji}
              </p>
              <img
                src={country.flags.png}
                alt={`${country.name} flag`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountriesPage;
