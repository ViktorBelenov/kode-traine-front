import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const createThunk = createAsyncThunk.withTypes<{
    state: RootState
    dispatch: AppDispatch
  }>()