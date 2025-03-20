import { createSlice } from "@reduxjs/toolkit";


type ThemeState = {
    theme: 'dark' | 'white'
}

const initialState: ThemeState = {
    theme:'dark'
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
      setTheme: (state) => {
        state.theme = state.theme === 'white' ? 'dark' : 'white';        
      }
    },
  });

export const { setTheme } = themeSlice.actions; 
export default themeSlice.reducer;