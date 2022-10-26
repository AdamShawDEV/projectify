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
import { taskStatusEnum } from "../../consts";
import { MdOutlineAdd } from "react-icons/md";

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

  const pendingTasks = tasks
    ? tasks.filter((task) => task.status === taskStatusEnum.PENDING)
    : [];
  const activeTassks = tasks
    ? tasks.filter((task) => task.status === taskStatusEnum.ACTIVE)
    : [];
  const completedTassks = tasks
    ? tasks.filter((task) => task.status === taskStatusEnum.COMPLETED)
    : [];

  return (
    <div className={styles.columnsContainer}>
      <div className={`${styles.column} ${styles.pendingColumn}`}>
        <div className={styles.colomnHeading}>Pending</div>
        <TaskList tasks={pendingTasks} />
        <button className={styles.addButton}>
          <MdOutlineAdd />
        </button>
      </div>
      <div className={`${styles.column} ${styles.activeColumn}`}>
        <div className={styles.colomnHeading}>Active</div>
        <TaskList tasks={activeTassks} />
        <button className={styles.addButton}>
          <MdOutlineAdd />
        </button>
      </div>
      <div className={`${styles.column} ${styles.completedColumn}`}>
        <div className={styles.colomnHeading}>Completed</div>
        <TaskList tasks={completedTassks} />
        <button className={styles.addButton}>
          <MdOutlineAdd />
        </button>
      </div>
    </div>
  );
}

export default ProjectPage;
