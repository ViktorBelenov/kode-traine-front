import { createSlice } from "@reduxjs/toolkit";
import { Person } from "../types/person";


type ThemeState = {
    people: Person[],
}

const initialState: ThemeState = {
    people:[]
}

const peopleStorageSlice = createSlice({
    name: "peopleStorage",
    initialState,
    reducers: {
      setTheme: (state, action) => {
        state.theme = action.payload;      
      }
    },
  });


export default peopleStorageSlice.reducer;