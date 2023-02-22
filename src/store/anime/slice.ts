import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LOAD_STATUSES } from "../../types/loadStatuses";
import { Anime } from "../../types";
import { getAnime } from "../../api";


const SLICE_NAME = "anime";

const fetchAnime = createAsyncThunk(SLICE_NAME, getAnime);

export interface State {
       loadStatus: LOAD_STATUSES;
       items: Anime[];
       params: {limit: number}
}

const initialState: State = {
       loadStatus: LOAD_STATUSES.UNKNOWN,
       items: [],
       params: { limit: 3 }
};


const { reducer, actions: sliceActions } = createSlice({
       name: SLICE_NAME,
       initialState,
       reducers: {},
       extraReducers: (builder) => {
              builder.addCase(fetchAnime.pending, (state) => {
                     state.loadStatus = LOAD_STATUSES.LOADING;
              });

              builder.addCase(fetchAnime.rejected, (state) => {
                     state.loadStatus = LOAD_STATUSES.ERROR;
              });

              builder.addCase(fetchAnime.fulfilled, (state, action) => {
                     state.loadStatus = LOAD_STATUSES.LOADED;
                     state.items = action.payload;
              });
       }
});

export { reducer };

export const actions = {
       ...sliceActions,
       fetchAnime
};