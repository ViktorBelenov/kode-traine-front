import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";


import axios from "axios";

import { Person } from "../types/person";

import { ALL_USERS_END_POINT } from "../const";

import { TFilter } from "../types/person";
import { TSortBy } from "../types/sort";

type FilterBy = TFilter;


type PeopleState = {
    people: Person[];
    status: "idle" | "loading" | "succeeded" | "failed";
    filterBy: FilterBy;
    sortBy: TSortBy;
}

type ResponseType = {
  items: Person[];
}

export const fetchPeople = createAsyncThunk("people/fetchPeople", async (filterBy: FilterBy) => {
    const response = await axios.get<ResponseType>(`${ALL_USERS_END_POINT}${filterBy}`);
    return response.data.items;
  });

const sortPeople = (type:Exclude<TSortBy, "none">, people:Person[]):Person[] => {
    return people.sort((a, b) => {
      if (a[type] > b[type]) {
        return 1;
      }
      if (a[type] < b[type]) {
        return -1;
      }
      return 0;
    });
  }

const initialState: PeopleState = {
    people: [],
    status: "idle",
    filterBy: "all",
    sortBy: "none"
  };

  const peopleSlice = createSlice({
    name: "people",
    initialState,
    reducers: {
      setFilterBy: (state, action) => {
        state.filterBy = action.payload;
      },
      setSortBy: (state, action) => {
        state.sortBy = action.payload;
        state.people = sortPeople(action.payload, state.people);
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
  export const { setSortBy } = peopleSlice.actions;
  export default peopleSlice.reducer;