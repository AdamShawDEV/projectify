import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";
import * as peopleApi from "../../api/peopleApi";

const loadPeople = createAsyncThunk("people/loadPeople", async () => {
  const response = await peopleApi.getPeople();
  return response;
});

const addPerson = createAsyncThunk("people/addPerson", async (person) => {
  const response = await peopleApi.savePerson(person);
  return response;
});

const updatePerson = createAsyncThunk("people/updatePerson", async (person) => {
  const response = await peopleApi.savePerson(person);
  return response;
});

const deletePerson = createAsyncThunk(
  "people.deletePerson",
  async (personId) => {
    const response = await peopleApi.deletePerson(personId);
    return response;
  }
);

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
      }))
      .addCase(addPerson.fulfilled, (state, action) => ({
        ...state,
        data: [...state.data, action.payload],
      }))
      .addCase(updatePerson.fulfilled, (state, action) => {
        return {
          ...state,
          data: state.data.map((person) =>
            person.id === action.payload.id ? action.payload : person
          ),
        };
      })
      .addCase(deletePerson.fulfilled, (state, action) => {
        return {
          ...state,
          data: state.data.filter((person) => person.id !== action.payload),
        };
      });
  },
});

const selectAllPeople = (state) => state.people.data;

const selectPeopleStatus = (state) => state.people.status;

export default peopleSlice.reducer;
export {
  selectAllPeople,
  selectPeopleStatus,
  loadPeople,
  addPerson,
  updatePerson,
  deletePerson,
};
