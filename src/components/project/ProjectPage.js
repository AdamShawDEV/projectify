import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loadProjects,
  selectProjectById,
  selectProjectStatus,
} from "../../redux/slices/projectSlice";
import {
  loadTasks,
  selectTaskByProjectId,
  selectTaskStatus,
} from "../../redux/slices/taskSlice";

function ProjectPage() {
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const project = useSelector((state) => selectProjectById(state, projectId));
  const projectStatus = useSelector(selectProjectStatus);
  const tasks = useSelector((state) => selectTaskByProjectId(state, projectId));
  const tasksStatus = useSelector(selectTaskStatus);

  useEffect(() => {
    if (projectStatus === "idle") {
      dispatch(loadProjects());
    }
    if (tasksStatus === "idle") {
      dispatch(loadTasks());
    }
  }, [projectStatus, tasksStatus, dispatch]);

  console.log(project);
  console.log(tasks);

  return (
    <>
      <h1>Project</h1>
      <span>{projectId}</span>
    </>
  );
}

export default ProjectPage;
