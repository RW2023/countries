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
  const response = await fetch('https://api.example.com/countries');
  const countries: Country[] = await response.json(); // Assuming the API returns an array of Country objects

  return countries.map((country: Country) => ({
    params: { countryCode: country.code },
  }));
}
