import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

import { Person } from "../types/person";

import { ALL_USERS_END_POINT } from "../const";


type PeopleState = {
    people: Person[];
    status: "idle" | "loading" | "succeeded" | "failed";
}

type ResponseType = {
  items: Person[];
}

export const fetchPeople = createAsyncThunk("people/fetchPeople", async () => {
    const response = await axios.get<ResponseType>(ALL_USERS_END_POINT);
    return response.data.items;
  });

const initialState: PeopleState = {
    people: [],
    status: "idle",
  };

  const peopleSlice = createSlice({
    name: "people",
    initialState,
    reducers: {},
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

  export default peopleSlice.reducer;