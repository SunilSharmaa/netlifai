import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies : null,
        popularMovies : null,
        trailerVideoKey : null,
    },
    reducers: {
        addNowPlayingMovies : (state, action)=> {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideoKey : (state, action)=> {
            state.trailerVideoKey = action.payload;
        },
        addPopularMovies : (state, action) => {
            state.popularMovies = action.payload;
        },
    }
})

export const {addNowPlayingMovies, addTrailerVideoKey, addPopularMovies} = moviesSlice.actions;
export default moviesSlice.reducer;