/* eslint-disable @next/next/no-img-element */
// src/app/countries/page.tsx
'use client';
import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading'; // Adjust the path as necessary
import { Country } from '@/utils/types';
import Heading from '@/components/Heading';
import SubHeading from '@/components/SubHeading';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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
    <div className="min-h-screen">
      <Heading title="Countries" iconClass="fas fa-globe" />
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
          {filteredCountries.map((country) => (
            <div
              key={country.code}
              className="p-6 rounded-lg shadow-lg bg-base-100 card-compact"
              data-theme="light"
            >
              <div className="card-title flex flex-col">
                <div className="text-buttonText">
                  <SubHeading title={`${country.name.common}`} />
                </div>
                <div className="italic">
                  <SubHeading title={`(${country.name.official})`} />
                </div>
              </div>
              <div className="card-body text-xl">
                <p className="mb-2 text-green-700">
                  <strong>Currency:</strong>
                  <i className="fas fa-money-bill-wave mr-2"></i>
                  {country.currencies &&
                    Object.entries(country.currencies)
                      .map(([code, curr]) => `${curr.name} (${curr.symbol})`)
                      .join(', ')}
                </p>
                <p className="mb-2">
                  <strong>Languages:</strong>
                  <i className="fas fa-language mr-2"></i>
                  {Object.entries(country.languages)
                    .map(([code, name]) => name)
                    .join(', ')}
                </p>
              </div>
              <div className="mb-2">
                <strong>Flag:</strong>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-64 border border-background rounded shadow-2xl"
                >
                  <Link href={`/app/countries/${country.code}/`} passHref>
                    <div className="relative w-full h-64">
                      <Image
                        src={country.flags.png}
                        alt={`${country.name.common} flag`}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </Link>
                </motion.div>
              </div>
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
