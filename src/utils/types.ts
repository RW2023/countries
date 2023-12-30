//src/utils/types.ts
export interface Country {
  name: {
    common: string;
    official: string;
  };
  flags: string[];
  capital: string[];
  population: number;
  region: string;
  subregion: string;
  languages: { [key: string]: string };
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  timezones: string[];
  // Add other properties as needed
}
