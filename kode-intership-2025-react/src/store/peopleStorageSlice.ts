import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { ALL_USERS_END_POINT } from "../const";
import { TFilter } from "../types/person";
import { Person } from "../types/person";
import { createThunk } from "./hooks";
import { filterOffline, setFilterBy, setSearchBy, setSortBy, updateCopyPeople } from "./peopleSlice";


type FilterBy = TFilter;



type CacheItem = {
    data: Person[];          
    timestamp: number;      
  };

type peopleStorageState = {
    people: Person[];
    status: "idle" | "loading" | "succeeded" | "failed";
    online: "idle" |"online" | "offline"
    cache:Record<FilterBy, CacheItem>;
}

const initialState: peopleStorageState = {
    people: JSON.parse(localStorage.getItem("people") || "[]"),
    status: "idle",
    online: "idle",
    cache: JSON.parse(localStorage.getItem("cache") || "{}") 
}

type ResponseType = {
    items: Person[];
  }

export const fetchPeople = createThunk("peopleStorage/fetchPeople", async (filterBy: FilterBy,{getState, dispatch}
) => {
    const state = getState();
    const oldPeople = state.peopleStorage.people;
    const onlineStatus = state.peopleStorage.online;

    const cacheKey = filterBy;
    const cachedData = state.peopleStorage.cache[cacheKey];
    const isCacheValid = cachedData && (Date.now() - cachedData.timestamp < 5 * 60 * 1000);

    
    if (isCacheValid) {
        dispatch(updateCopyPeople(cachedData.data));
        return cachedData.data;
      }


    if(onlineStatus !== 'offline') {
        const response = await axios.get<ResponseType>(`${ALL_USERS_END_POINT}${filterBy}`);
        const people = response.data.items;

        localStorage.setItem("people", JSON.stringify(people));

        dispatch(updateCache({ key: cacheKey, data: people }));
        dispatch(updateCopyPeople(people));
        return people;
    }

    dispatch(filterOffline(oldPeople));


    return oldPeople;

 });

 export const updateAfterOffline = createThunk("peopleStorage/updateAfterOffline", async (_, { dispatch }) => {
    dispatch(setFilterBy('all'))
    dispatch(setSearchBy(''))
    dispatch(setSortBy('birthday'))
    dispatch(fetchPeople('all'))
  });

 
const peopleStorageSlice = createSlice({
    name: "peopleStorage",
    initialState,
    reducers: {
        setOnlineStatus: (state, action) => {
            state.online = action.payload;
        },
        updateCache: (state, action) => {
            const { key, data } = action.payload;
            const newCache = {
                ...state.cache,
                [key]: { data, timestamp: Date.now() }
            };
            state.cache = newCache;
            localStorage.setItem("cache", JSON.stringify(newCache));
        }
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

export const { setOnlineStatus, updateCache }  = peopleStorageSlice.actions;
export default peopleStorageSlice.reducer;

