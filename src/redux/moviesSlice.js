import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upComingMovies : null,
    trailerVideoKey: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideoKey: (state, action) => {
      state.trailerVideoKey = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpComingMovies : (state, action) => {
        state.upComingMovies = action.payload;
    }
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideoKey,
  addPopularMovies,
  addTopRatedMovies,
  addUpComingMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
