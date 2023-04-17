import { createSlice } from '@reduxjs/toolkit';

type SearchState = {
  searchText: string;
  page: number;
  isLoading: boolean;
  error: string;
};

const initialState: SearchState = {
  searchText: '',
  page: 1,
  isLoading: false,
  error: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    saveSearch(state, action) {
      state.searchText = action.payload.searchText;
      state.page = action.payload.page;
    },
  },
});

// export const { saveSearch } = searchSlice.actions;
export default searchSlice.reducer;
