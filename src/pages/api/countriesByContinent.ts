// pages/api/continentCountries.ts
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

interface RestCountry {
  cca2: string;
  flags: string[];
  name: {
    common: string;
  };
  region: string;
  // ... other properties
}

interface CombinedCountry {
  code: string;
  name: string;
  flag: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { continentCode } = req.query;

  if (!continentCode || typeof continentCode !== 'string') {
    res.status(400).send('Continent code is required');
    return;
  }

  try {
    const restCountriesResponse = await axios.get<RestCountry[]>(
      'https://restcountries.com/v3.1/all',
    );
    const restCountriesData = restCountriesResponse.data;

    const filteredCountries = restCountriesData.filter(
      (country) => country.region === continentCode,
    );

    const combinedData: CombinedCountry[] = filteredCountries.map(
      (country) => ({
        code: country.cca2,
        name: country.name.common,
        flag: country.flags[1],
      }),
    );

    res.status(200).json(combinedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch country data' });
  }
};

export default handler;
