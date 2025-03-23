import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type Language = 'eng' | 'rus';
type Theme = 'dark' | 'white';

type utilityState = {
    theme: Theme,
    language: Language
}

const initialState: utilityState = {
    theme:'dark',
    language: 'rus'
}

const utilitySlice = createSlice({
    name: "utility",
    initialState,
    reducers: {
      setTheme: (state, action: PayloadAction<Theme>) => {
        state.theme = action.payload;      
      },
      setLanguage: (state, action: PayloadAction<Language>) => {
        state.language = action.payload;      
      }
    },
  });

export const { setTheme, setLanguage } = utilitySlice.actions; 
export default utilitySlice.reducer;