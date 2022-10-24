import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loadProjects,
  selectAllProjects,
  selectProjectStatus,
} from "../../redux/slices/projectSlice";
import {
  loadTasks,
  selectAllTasks,
  selectTaskStatus,
} from "../../redux/slices/taskSlice";
import ProjectList from "./ProjectList";
import { usePageTitle } from "../hooks/pageTitleContext";

function ProjectsPage() {
  const { setPageTitle } = usePageTitle();
  const dispatch = useDispatch();
  const projects = useSelector(selectAllProjects);
  const projectStatus = useSelector(selectProjectStatus);
  const tasks = useSelector(selectAllTasks);
  const taskStatus = useSelector(selectTaskStatus);

  useEffect(() => {
    setPageTitle("Projects");
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (projectStatus === "idle") {
      dispatch(loadProjects());
    }

    if (taskStatus === "idle") {
      dispatch(loadTasks());
    }

    // eslint-disable-next-line
  }, []);

  if (projectStatus === "loading" || taskStatus === "loading")
    return "loading...";

  return (
    <>
      <h1>Projects</h1>
      <ProjectList projects={projects} tasks={tasks} />
    </>
  );
}

export default ProjectsPage;
