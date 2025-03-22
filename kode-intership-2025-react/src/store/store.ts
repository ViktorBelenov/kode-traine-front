import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from './peopleSlice';
import themeReducer from './themeSlice';
import peopleStorageReducer from './peopleStorageSlice';

export const store = configureStore ({
  reducer:{
    people: peopleReducer,
    theme: themeReducer,
    peopleStorage: peopleStorageReducer,
  }
});


export type RootState = ReturnType<typeof store.getState>;
;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;