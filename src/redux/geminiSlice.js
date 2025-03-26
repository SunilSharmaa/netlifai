import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
    name : "gemini",
    initialState : {
        inputText : null,
        movieName : null,
        movieData : null,
    },
    reducers : {
        addInputText : (state, action)=> {
            state.inputText = action.payload;
        },
        addMovieNameAndData : (state, action)=> {
            const {movieName, movieData} = action.payload;
            state.movieName = movieName;
            state.movieData = movieData;
        }
    }
})

export const {addInputText, addMovieNameAndData} = geminiSlice.actions;
export default geminiSlice.reducer;