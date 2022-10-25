import React, { useEffect } from "react";
import styles from "./modules/ProjectPage.module.css";
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
import TaskList from "./TaskList";

function ProjectPage() {
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const project = useSelector((state) => selectProjectById(state, projectId));
  const projectStatus = useSelector(selectProjectStatus);
  const tasks = useSelector((state) => selectTaskByProjectId(state, projectId));
  const taskStatus = useSelector(selectTaskStatus);

  useEffect(() => {
    if (projectStatus === "idle") {
      dispatch(loadProjects());
    }
    if (taskStatus === "idle") {
      dispatch(loadTasks());
    }
  }, [projectStatus, taskStatus, dispatch]);

  if (projectStatus === "loading" || taskStatus === "loading")
    return "loading...";

  const pendingTasks = tasks
    ? tasks.filter((task) => task.status === "pending")
    : [];
  const inProgressTask = tasks
    ? tasks.filter((task) => task.status === "in progress")
    : [];
  const completedTasks = tasks
    ? tasks.filter((task) => task.status === "completed")
    : [];

  return (
    <div className={styles.columnsContainer}>
      <div className={styles.columnsLeft}>
        <button>add task</button>
      </div>
      <div className={styles.columnsRight}>
        <h1>{project.title}</h1>
        {tasks ? (
          <>
            <h2>In Progress Tasks</h2>
            <TaskList tasks={inProgressTask} />
            <h2>Pending Tasks</h2>
            <TaskList tasks={pendingTasks} />
            <h2>Completed Tasks</h2>
            <TaskList tasks={completedTasks} />
          </>
        ) : (
          <h2>No Tasks</h2>
        )}
      </div>
    </div>
  );
}

export default ProjectPage;
