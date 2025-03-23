import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from './peopleSlice';
import utilityReducer from './utilitySlice';
import peopleStorageReducer from './peopleStorageSlice';

export const store = configureStore ({
  reducer:{
    people: peopleReducer,
    utility: utilityReducer,
    peopleStorage: peopleStorageReducer,
  }
});


export type RootState = ReturnType<typeof store.getState>;
;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;