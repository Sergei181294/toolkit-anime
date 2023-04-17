import { reducer as animeReducer } from "./anime";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootRedcuer = combineReducers({
  anime: animeReducer
});

export const store = configureStore({ reducer: rootRedcuer });

export type RootStore = ReturnType<typeof store.getState>;