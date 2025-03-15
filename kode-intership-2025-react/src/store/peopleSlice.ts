import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";


import axios from "axios";

import { Person } from "../types/person";


import { ALL_USERS_END_POINT } from "../const";

import { TFilter } from "../types/person";

type SortBy = TFilter;

type PeopleState = {
    people: Person[];
    status: "idle" | "loading" | "succeeded" | "failed";
    sortBy: SortBy;
}

type ResponseType = {
  items: Person[];
}

export const fetchPeople = createAsyncThunk("people/fetchPeople", async (sortBy: SortBy) => {
    const response = await axios.get<ResponseType>(`${ALL_USERS_END_POINT}${sortBy}`);
    return response.data.items;
  });

const initialState: PeopleState = {
    people: [],
    status: "idle",
    sortBy: "all",
  };

  const peopleSlice = createSlice({
    name: "people",
    initialState,
    reducers: {
      setSortBy: (state, action) => {
        state.sortBy = action.payload;
      },
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

  export const { setSortBy } = peopleSlice.actions;
  export default peopleSlice.reducer;