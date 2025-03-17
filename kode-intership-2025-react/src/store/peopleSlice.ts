import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";


import axios from "axios";

import { Person } from "../types/person";

import { ALL_USERS_END_POINT } from "../const";

import { TFilter } from "../types/person";
import { TSortBy } from "../types/sort";

type FilterBy = TFilter;


type PeopleState = {
    people: Person[];
    copyPeople: Person[];
    status: "idle" | "loading" | "succeeded" | "failed";
    filterBy: FilterBy;
    sortBy: TSortBy;
    searchBy:string
}

type ResponseType = {
  items: Person[];
}

export const fetchPeople = createAsyncThunk("people/fetchPeople", async (filterBy: FilterBy) => {
    const response = await axios.get<ResponseType>(`${ALL_USERS_END_POINT}${filterBy}`);
    return response.data.items;
  });


const birthdaySort = (people: Person[]): Person[] => {
  const today = new Date();
  const currentYear = today.getFullYear();
  
  return [...people].sort((a, b) => {
    const dateA = new Date(a.birthday);
    const dateB = new Date(b.birthday);
  
    dateA.setFullYear(currentYear);
    dateB.setFullYear(currentYear);
  
    if (dateA < today) dateA.setFullYear(currentYear + 1);
    if (dateB < today) dateB.setFullYear(currentYear + 1);
  
    return dateA.getTime() - dateB.getTime();
  });
};

const sortPeople = (type: TSortBy, people: Person[]): Person[] => {
  switch (type) {
    case "none":
        return people;
        
    case "firstName":
      return [...people].sort((a, b) => {
        if (a[type] > b[type]) return 1;
        if (a[type] < b[type]) return -1;
        return 0;
      });
    case "birthday":
      return birthdaySort(people);
  
    default:
      return people;
  }
};



const initialState: PeopleState = {
    people: [],  
    copyPeople: [],
    status: "idle",
    filterBy: "all",
    sortBy: "firstName",
    searchBy:''
  };

  const peopleSlice = createSlice({
    name: "people",
    initialState,
    reducers: {
      setFilterBy: (state, action) => {
        state.filterBy = action.payload;
        state.searchBy = '';
      },
      setSortBy: (state, action) => {
        state.sortBy = action.payload;
        state.copyPeople = sortPeople(action.payload, state.copyPeople);
      },
      setSearchBy: (state, action) => {
        state.searchBy = action.payload;
      },
      setSearch:(state) => {
        state.copyPeople = state.people.filter((person) =>
          `${person.firstName} ${person.lastName} ${person.userTag}`
            .includes(state.searchBy)
        );
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
          state.copyPeople = action.payload;
          state.copyPeople = sortPeople(state.sortBy, state.copyPeople);
        })
        .addCase(fetchPeople.rejected, (state) => {
          state.status = "failed";
        });
    },
  });

  export const { setFilterBy } = peopleSlice.actions;
  export const { setSortBy } = peopleSlice.actions;
  export const { setSearchBy } = peopleSlice.actions;
  export const { setSearch } = peopleSlice.actions;
  export default peopleSlice.reducer;