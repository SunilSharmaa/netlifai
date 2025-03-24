import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
    name : "gemini",
    initialState : {
        inputText : null,
    },
    reducers : {
        addInputText : (state, action)=> {
            state.inputText = action.payload;
        }
    }
})

export const {addInputText} = geminiSlice.actions;
export default geminiSlice.reducer;