import * as types from "./actionTypes";
import * as projectsApi from "../../api/projectApi";

function loadProjectsSuccess(projects) {
  return { type: types.LOAD_PROJECTS_SUCCESS, projects };
}

function loadProjects() {
  return function (dispatch) {
    return projectsApi
      .getProjects()
      .then((projects) => {
        dispatch(loadProjectsSuccess(projects));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export { loadProjects };
