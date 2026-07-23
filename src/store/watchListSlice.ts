import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type WatchListState = {
  watchList: number[];
};
const localStorageWatchlist = localStorage.getItem("watchList");
const initialState: WatchListState = {
  watchList: localStorageWatchlist ? JSON.parse(localStorageWatchlist) : [],
};

const watchListSlice = createSlice({
  name: "watchList",
  initialState,
  reducers: {
    toggleWatchList: (state, action: PayloadAction<number>) => {
      if (state.watchList.includes(action.payload)) {
        const filteredWatchList = state.watchList.filter(
          (id) => id !== action.payload,
        );
        state.watchList = filteredWatchList;
        localStorage.setItem("watchList", JSON.stringify(state.watchList));
        return;
      }
      state.watchList = [...state.watchList, action.payload];
      localStorage.setItem("watchList", JSON.stringify(state.watchList));
    },
  },
});

export const { toggleWatchList } = watchListSlice.actions;
export default watchListSlice.reducer;
