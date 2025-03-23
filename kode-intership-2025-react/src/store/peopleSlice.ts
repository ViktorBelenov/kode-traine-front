import { createSlice } from "@reduxjs/toolkit";

import { Person } from "../types/person";

import { TFilter } from "../types/person";
import { TSortBy } from "../types/sort";
import { createThunk } from "./hooks";


type FilterBy = TFilter;


type PeopleState = {
    copyPeople: Person[];
    filterBy: FilterBy;
    sortBy: TSortBy;
    searchBy:string
}



export const searchPeople = createThunk(
  "people/searchPeople",
  async (_, { getState, dispatch }) => {
    const state = getState();
    const filter = state.people.filterBy;
    const people = state.peopleStorage.cache[filter].data;
    const searchBy = state.people.searchBy;


    const filteredPeople = people.filter((person) =>
      `${person.firstName} ${person.lastName} ${person.userTag}`
        .includes(searchBy)
    );


    dispatch(updateCopyPeople(filteredPeople));
  }
);


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

export const sortPeople = (type: TSortBy, people: Person[]): Person[] => {
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

const filterPeople = (filter:FilterBy, people: Person[]): Person[] => {
 
  if(filter === 'all') {
    return people;
  }

  return people.filter((person) => {
    return person.department === filter;
  });
};



const initialState: PeopleState = {
    copyPeople: [],
    filterBy: "all",
    sortBy: "firstName",
    searchBy:''
  };

  const peopleSlice = createSlice({
    name: "people",
    initialState,
    reducers: {
      updateCopyPeople:(state, action) => {
        state.copyPeople = sortPeople(state.sortBy, action.payload);
      },
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
      filterOffline: (state, action) => {
        state.copyPeople = filterPeople(state.filterBy, action.payload);
      }
    }
  });

  export const { setFilterBy } = peopleSlice.actions;
  export const { setSortBy } = peopleSlice.actions;
  export const { setSearchBy } = peopleSlice.actions;
  export const { updateCopyPeople } = peopleSlice.actions;
  export const { filterOffline } = peopleSlice.actions;
  export default peopleSlice.reducer;