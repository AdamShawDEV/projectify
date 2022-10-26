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
import Button from "../common/Button";
import { GoPlus } from "react-icons/go";

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

  if (projectStatus !== "succeeded" || taskStatus !== "succeeded")
    return "loading...";

  const activeTasks = tasks
    ? tasks.filter((task) => task.status !== "completed")
    : [];
  const completedTasks = tasks
    ? tasks.filter((task) => task.status === "completed")
    : [];

  return (
    <div className={styles.columnsContainer}>
      <div className={styles.columnsLeft}>
        <Button>
          add task <GoPlus />
        </Button>
      </div>
      <div className={styles.columnsRight}>
        <h1>{project.title}</h1>
        {tasks ? (
          <>
            <h2>Active Tasks</h2>
            <TaskList tasks={activeTasks} />
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
