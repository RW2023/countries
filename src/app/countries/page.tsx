/* eslint-disable @next/next/no-img-element */
// src/app/countries/page.tsx
'use client';
import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading'; // Adjust the path as necessary
import { Country } from '@/utils/types';

const CountriesPage = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/api/countries')
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      });
  }, []);

  const filteredCountries = countries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.name.official.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen" data-theme="business">
      <h1 className="text-center py-8 text-4xl">Countries</h1>
      <input
        type="text"
        placeholder="Search countries..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-1/2 block mx-auto px-4 py-2 mb-6 border rounded"
      />
      {loading ? (
        <Loading text="countries" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {filteredCountries.map((country, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg bg-secondary"
              data-theme="corporate"
            >
              <h2 className="mb-4 font-sans text-3xl text-center font-bold">
                {country.name.common} ({country.name.official})
              </h2>
              <p className="mb-2 text-green-700">
                <strong>Currency:</strong>
                {country.currencies &&
                  Object.entries(country.currencies)
                    .map(([code, curr]) => `${curr.name} (${curr.symbol})`)
                    .join(', ')}
              </p>
              <p className="mb-2">
                <strong>Languages:</strong>{' '}
                {Object.entries(country.languages)
                  .map(([code, name]) => name)
                  .join(', ')}
              </p>
              <p className="mb-2">
                <strong>Flag:</strong>
                <img
                  src={country.flags.png}
                  alt={`${country.name.common} flag`}
                  className="w-full h-auto border border-background rounded shadow-2xl transform transition-transform duration-300 hover:scale-105"
                />
              </p>
              {country.emoji && (
                <p className="mb-2">
                  <strong>Emoji:</strong> {country.emoji}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountriesPage;
