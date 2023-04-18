import { configureStore } from '@reduxjs/toolkit';
import { rickMortyApi } from './rickMortyApi';
import searchReducer from './searchSlice';
import cardReducer from './cardsSliece';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    cards: cardReducer,
    [rickMortyApi.reducerPath]: rickMortyApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickMortyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
