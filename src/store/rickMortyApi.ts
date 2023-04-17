import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RickMortyApi } from '../types/RickMortyApi';

export const rickMortyApi = createApi({
  reducerPath: 'rickMortyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: (build) => ({
    getCharacter: build.query<RickMortyApi, Record<string, string | number>>({
      query: ({ query, page }) =>
        `/character/?${query && `name=${query}`}&${page && `page=${page}`}`,
    }),
  }),
});

export const { useGetCharacterQuery } = rickMortyApi;
