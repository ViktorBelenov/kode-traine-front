import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";


import axios from "axios";

import { Person } from "../types/person";


import { ALL_USERS_END_POINT } from "../const";

import { TFilter } from "../types/person";

type FilterBy = TFilter;

type PeopleState = {
    people: Person[];
    status: "idle" | "loading" | "succeeded" | "failed";
    filterBy: FilterBy;
}

type ResponseType = {
  items: Person[];
}

export const fetchPeople = createAsyncThunk("people/fetchPeople", async (filterBy: FilterBy) => {
    const response = await axios.get<ResponseType>(`${ALL_USERS_END_POINT}${filterBy}`);
    return response.data.items;
  });

const initialState: PeopleState = {
    people: [],
    status: "idle",
    filterBy: "all",
  };

  const peopleSlice = createSlice({
    name: "people",
    initialState,
    reducers: {
      setFilterBy: (state, action) => {
        state.filterBy = action.payload;
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

  export const { setFilterBy } = peopleSlice.actions;
  export default peopleSlice.reducer;