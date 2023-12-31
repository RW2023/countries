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
  // Add other properties as required from RestCountry API
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const restCountriesResponse = await axios.get(
      'https://restcountries.com/v3.1/all?fields=name,flags,capital,currencies,languages,population,region,subregion,timezones',
    );
    const restCountriesData = restCountriesResponse.data;

    const graphqlQuery = `{ countries { code, name, languages { code, name } } }`;
    const graphqlData: GraphQLResponse = await request<GraphQLResponse>(
      'https://countries.trevorblades.com',
      graphqlQuery,
    );

    const combinedData = restCountriesData.map((restCountry: RestCountry) => {
      const graphqlCountry = graphqlData.countries.find(
        (gqlCountry) => gqlCountry.code === restCountry.cca2,
      );

      return {
        ...restCountry,
        ...graphqlCountry,
        code: restCountry.cca2,
      };
    });

    res.status(200).json(combinedData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch country data' });
  }
};

export default handler;
