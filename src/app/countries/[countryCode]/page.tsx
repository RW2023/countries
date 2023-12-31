// src/app/countries/[countryCode]/page.tsx
import { useRouter } from 'next/router';
import React from 'react';
import { Country } from '@/utils/types';

const CountryDetailsPage = () => {
  const router = useRouter();
  const { countryCode } = router.query;

  // Fetch and display country details based on countryCode
  return <div>Country Details: {countryCode}</div>;
};

export default CountryDetailsPage;

export async function generateStaticParams() {
  // Fetch the list of country codes dynamically from an API or data source
  const response = await fetch('https://api.example.com/countries');
  const countries = await response.json();

  return countries.map((country) => ({
    params: { countryCode: country.code },
  }));
}

