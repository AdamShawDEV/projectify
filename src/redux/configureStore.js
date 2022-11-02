import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./slices/projectSlice";
import taskReducer from "./slices/taskSlice";
import peopleReducer from "./slices/peopleSlice";

export default configureStore({
  reducer: {
    projects: projectReducer,
    tasks: taskReducer,
    people: peopleReducer,
  },
});
