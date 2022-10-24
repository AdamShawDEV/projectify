import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";
import * as projectApi from "../../api/projectApi";

const loadProjects = createAsyncThunk("project/loadProjects", async () => {
  const response = await projectApi.getProjects();
  return response;
});

const projectSlice = createSlice({
  name: "project",
  initialState: initialState.projects,
  reducers: {
    loadProjectsSuccess: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
  extraReducers(builder) {
    builder
      .addCase(loadProjects.pending, (state, action) => ({
        ...state,
        status: "loading",
      }))
      .addCase(loadProjects.fulfilled, (state, action) => ({
        ...state,
        status: "succeeded",
        data: action.payload,
      }))
      .addCase(loadProjects.rejected, (state, action) => ({
        ...state,
        status: "failed",
        error: action.error.message,
      }));
  },
});

const selectAllProjects = (state) => state.projects.data;

const selectProjectById = (state, projectId) =>
  state.projects.data.find((project) => project.id === projectId);

const selectProjectStatus = (state) => state.projects.status;

export default projectSlice.reducer;
export {
  loadProjects,
  selectAllProjects,
  selectProjectById,
  selectProjectStatus,
};
