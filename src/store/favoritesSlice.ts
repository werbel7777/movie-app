import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type FavoriteState = {
  favoriteList: number[];
};

const localStorageFavorites = localStorage.getItem("favoriteMovies");
const initialState: FavoriteState = {
  favoriteList: localStorageFavorites ? JSON.parse(localStorageFavorites) : [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      if (state.favoriteList.includes(action.payload)) {
        state.favoriteList = state.favoriteList.filter(
          (id) => id !== action.payload,
        );
        localStorage.setItem(
          "favoriteMovies",
          JSON.stringify(state.favoriteList),
        );
        return;
      }
      state.favoriteList = [...state.favoriteList, action.payload];
      localStorage.setItem(
        "favoriteMovies",
        JSON.stringify(state.favoriteList),
      );
      return;
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
