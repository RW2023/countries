// src/utils/continents.ts

export interface Continent {
  code: string;
  name: string;
}

export const continents: Continent[] = [
  { code: 'AF', name: 'Africa' },
  { code: 'AS', name: 'Asia' },
  { code: 'EU', name: 'Europe' },
  { code: 'NA', name: 'North America' },
  { code: 'OC', name: 'Oceania' },
  { code: 'SA', name: 'South America' },
  { code: 'AN', name: 'Antarctica' },
];
