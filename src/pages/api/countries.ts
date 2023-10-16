import axios from 'axios';
import { request } from 'graphql-request';
import type { NextApiRequest, NextApiResponse } from 'next';

interface Language {
  code: string;
  name: string;
}

interface Country {
  code: string;
  name: string;
  languages: Language[];
}

interface GraphQLResponse {
  countries: Country[];
}

interface RestCountry {
  cca2: string;
  flags: string[];
  // ... other properties
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const restCountriesResponse = await axios.get(
      'https://restcountries.com/v3.1/all',
    );
    const restCountriesData = restCountriesResponse.data;

    const graphqlQuery = `{ countries { code, name, languages { code, name } } }`;
    const graphqlData: GraphQLResponse = await request<GraphQLResponse>(
      'https://countries.trevorblades.com',
      graphqlQuery,
    );

    const combinedData = restCountriesData.map((restCountry: RestCountry) => {
      const graphqlCountry = graphqlData.countries.find(
        (country) => country.code === restCountry.cca2,
      );

      return {
        ...restCountry,
        ...graphqlCountry,
        flag: restCountry.flags[1],
      };
    });

    res.status(200).json(combinedData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch country data' });
  }
};

export default handler;