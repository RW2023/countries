// src/app/continents/page.tsx
'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { continents, Continent } from '../../utils/continents';
import Loading from '../../components/Loading';

interface Country {
  name: string;
}

const ContinentsPage = () => {
  const [selectedContinent, setSelectedContinent] = useState<Continent | null>(
    null,
  );
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchCountries = async (continentCode: string) => {
    setLoading(true);
    try {
      // Adjusted the URL to point to the new countriesByContinent endpoint
     const response = await fetch(
       `/api/countriesByContinent?continentCode=${continentCode}`,
     );

      if (!response.ok) {
        console.error('Failed to fetch countries:', response.statusText);
        setLoading(false);
        return;
      }
      const data = await response.json();
      // Assuming the data is an array of countries directly
      setCountries(data);
    } catch (error) {
      console.error('Failed to fetch countries:', error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen" data-theme="business">
      <h1 className="text-center py-8 text-4xl">Continents</h1>
      <div className="flex justify-center flex-wrap mb-8">
        {continents.map((continent) => (
          <button
            type="button"
            key={continent.code}
            onClick={() => {
              setSelectedContinent(continent);
              fetchCountries(continent.code);
            }}
            className="m-2 btn btn-ghost normal-case text-xl"
          >
            {continent.name}
          </button>
        ))}
      </div>

      {loading ? (
        <Loading text="countries" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {countries.map((country, index) => (
            <div key={index} className="p-6 rounded-lg shadow-lg bg-secondary">
              <h2 className="mb-4 font-sans text-3xl text-center font-bold">
                {country.name}
              </h2>
            </div>
          ))}
        </div>
      )}

      <div className="text-center mt-8">
        <Link href="/countries" className="btn btn-ghost normal-case text-xl">
          Back to Countries
        </Link>
      </div>
    </div>
  );
};

export default ContinentsPage;
