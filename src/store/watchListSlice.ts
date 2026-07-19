import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type WatchListState = {
  watchList: number[];
};

const initialState: WatchListState = {
  watchList: [],
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
        return;
      }
      state.watchList = [...state.watchList, action.payload];
    },
  },
});

export const { toggleWatchList } = watchListSlice.actions;
export default watchListSlice.reducer;
