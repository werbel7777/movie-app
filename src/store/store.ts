import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favoritesSlice";
import watchListReducer from "./watchListSlice";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    watchList: watchListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
