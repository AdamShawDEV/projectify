import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";
import * as peopleApi from "../../api/peopleApi";

const loadPeople = createAsyncThunk("people/loadPeople", async () => {
  const response = await peopleApi.getPeople();
  return response;
});

const peopleSlice = createSlice({
  name: "people",
  initialState: initialState.people,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadPeople.pending, (state, action) => ({
        ...state,
        status: "loading",
      }))
      .addCase(loadPeople.fulfilled, (state, action) => ({
        ...state,
        status: "succeeded",
        data: action.payload,
      }))
      .addCase(loadPeople.rejected, (state, action) => ({
        ...state,
        status: "failed",
        error: action.error.message,
      }));
  },
});

const selectAllPeople = (state) => state.people.data;

const selectPeopleStatus = (state) => state.people.status;

export default peopleSlice.reducer;
export { selectAllPeople, selectPeopleStatus, loadPeople };
