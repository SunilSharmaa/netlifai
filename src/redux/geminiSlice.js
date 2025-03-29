import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
    name : "gemini",
    initialState : {
        inputText : null,
        movieName : null,
        movieData : null,
        isSearchPageActive : false,
    },
    reducers : {
        addInputText : (state, action)=> {
            state.inputText = action.payload;
        },
        addMovieNameAndData : (state, action)=> {
            const {movieName, movieData} = action.payload;
            state.movieName = movieName;
            state.movieData = movieData;
        },
        toggleSearchPageActive : (state)=> {
            state.isSearchPageActive = !state.isSearchPageActive;
        }
    }
})

export const {addInputText, addMovieNameAndData, toggleSearchPageActive} = geminiSlice.actions;
export default geminiSlice.reducer;