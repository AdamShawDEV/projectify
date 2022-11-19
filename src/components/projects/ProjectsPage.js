import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loadProjects,
  selectAllProjects,
  selectProjectStatus,
} from "../../redux/slices/projectSlice";
import { loadTasks, selectTaskStatus } from "../../redux/slices/taskSlice";
import ProjectList from "./ProjectList";

function ProjectsPage() {
  const dispatch = useDispatch();
  const projects = useSelector(selectAllProjects);
  const projectStatus = useSelector(selectProjectStatus);
  const taskStatus = useSelector(selectTaskStatus);

  useEffect(() => {
    if (projectStatus === "idle") {
      dispatch(loadProjects());
    }

    if (taskStatus === "idle") {
      dispatch(loadTasks());
    }
  }, [projectStatus, taskStatus, dispatch]);

  if (projectStatus !== "succeeded" || taskStatus !== "succeeded")
    return "loading...";

  return (
    <>
      <h1>Projects</h1>
      <ProjectList projects={projects} />
    </>
  );
}

export default ProjectsPage;
