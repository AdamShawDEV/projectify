import * as types from "./actionTypes";
import * as taskApi from "../../api/taskApi";

function loadTasksSuccess(tasks) {
  return { type: types.LOAD_TASKS_SUCCESS, tasks };
}

function loadTasks() {
  return function (dispatch) {
    return taskApi
      .getTasks()
      .then((tasks) => {
        dispatch(loadTasksSuccess(tasks));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export { loadTasks };
