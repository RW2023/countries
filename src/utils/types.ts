export interface Country {
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
    svg: string;
  };
  capital: string[]; // Array of the country's capital cities
  population: number; // The population of the country
  region: string; // The region where the country is located
  subregion: string; // The subregion where the country is located
  languages: { [key: string]: string };
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  timezones: string[]; // Array of the country's timezones
  emoji?: string; // Optional emoji property
  code: string;
}
