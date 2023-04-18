import { createSlice } from '@reduxjs/toolkit';
import { Character } from '../types/Character';

type CardsState = {
  cards: Character[];
  error: string;
};

const initialState: CardsState = {
  cards: [],
  error: '',
};

export const cardsSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addCard(state, action) {
      console.log(action.payload);
      state.cards.push(action.payload.card);
    },
  },
});

export default cardsSlice.reducer;
