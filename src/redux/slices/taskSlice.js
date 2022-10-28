import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";
import * as taskApi from "../../api/taskApi";

const loadTasks = createAsyncThunk("task/loadTasks", async () => {
  const response = await taskApi.getTasks();
  return response;
});

const addTask = createAsyncThunk("task/addTask", async (taskAndProjectId) => {
  const response = await taskApi.saveTask(taskAndProjectId);
  return response;
});

const updateTask = createAsyncThunk(
  "task/updateTask",
  async (taskAndProjectId) => {
    const response = await taskApi.saveTask(taskAndProjectId);
    return response;
  }
);

const taskSlice = createSlice({
  name: "task",
  initialState: initialState.tasks,
  reducers: {
    loadTasksSuccess: (state, action) => action.payload,
  },
  extraReducers(builder) {
    builder
      .addCase(loadTasks.pending, (state, action) => ({
        ...state,
        status: "loading",
      }))
      .addCase(loadTasks.fulfilled, (state, action) => ({
        ...state,
        status: "succeeded",
        data: action.payload,
      }))
      .addCase(loadTasks.rejected, (state, action) => ({
        ...state,
        status: "failed",
        error: action.error.message,
      }))
      .addCase(addTask.fulfilled, (state, action) => ({
        ...state,
        data: {
          ...state.data,
          [action.payload.projectId]: [
            ...(state.data[action.payload.projectId] || []),
            action.payload.task,
          ],
        },
      }))
      .addCase(updateTask.fulfilled, (state, action) => ({
        ...state,
        data: {
          ...state.data,
          [action.payload.projectId]: state.data[action.payload.projectId].map(
            (task) =>
              task.id === action.payload.task.id ? action.payload.task : task
          ),
        },
      }));
  },
});

const selectAllTasks = (state) => state.tasks.data;

const selectTaskByProjectId = (state, projectId) => state.tasks.data[projectId];

const selectTaskStatus = (state) => state.tasks.status;

export default taskSlice.reducer;
export {
  loadTasks,
  addTask,
  updateTask,
  selectAllTasks,
  selectTaskByProjectId,
  selectTaskStatus,
};
