import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { ALL_USERS_END_POINT } from "../const";
import { TFilter } from "../types/person";
import { Person } from "../types/person";
import { createThunk } from "./hooks";
import { updateCopyPeople } from "./peopleSlice";


type FilterBy = TFilter;

type peopleStorageState = {
    people: Person[];
    status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: peopleStorageState = {
    people:[],
    status: "idle"
}

type ResponseType = {
    items: Person[];
  }

export const fetchPeople = createThunk("peopleStorage/fetchPeople", async (filterBy: FilterBy,{dispatch}
) => {
   const response = await axios.get<ResponseType>(`${ALL_USERS_END_POINT}${filterBy}`);

   dispatch(updateCopyPeople(response.data.items));
   return response.data.items;
 });

 
const peopleStorageSlice = createSlice({
    name: "peopleStorage",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
          builder
            .addCase(fetchPeople.pending, (state) => {
              state.status = "loading";
            })
            .addCase(fetchPeople.fulfilled, (state, action) => {
              state.status = "succeeded";
              state.people = action.payload;
            })
            .addCase(fetchPeople.rejected, (state) => {
              state.status = "failed";
            });
        },
  });


export default peopleStorageSlice.reducer;