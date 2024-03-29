import React, { useEffect, useState } from "react";
import styles from "./modules/ProjectPage.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loadProjects,
  selectProjectStatus,
} from "../../redux/slices/projectSlice";
import {
  loadTasks,
  selectTaskByProjectId,
  selectTaskStatus,
} from "../../redux/slices/taskSlice";
import { loadPeople, selectPeopleStatus } from "../../redux/slices/peopleSlice";
import TaskList from "./TaskList";
import { TASK_STATUS } from "../../consts";
import { MdOutlineAdd } from "react-icons/md";
import AddEditTaskForm from "./AddEditTaskForm";

function ProjectPage() {
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const projectStatus = useSelector(selectProjectStatus);
  const tasks = useSelector((state) => selectTaskByProjectId(state, projectId));
  const taskStatus = useSelector(selectTaskStatus);
  const peopleStatus = useSelector(selectPeopleStatus);
  const [displayAddTaskForm, setDisplayAddTaskForm] = useState(false);

  useEffect(() => {
    if (projectStatus === "idle") {
      dispatch(loadProjects());
    }
    if (taskStatus === "idle") {
      dispatch(loadTasks());
    }
    if (peopleStatus === "idle") {
      dispatch(loadPeople());
    }
  }, [projectStatus, taskStatus, peopleStatus, dispatch]);

  function renderList(heading, list, style) {
    return (
      <div className={`${styles.column} ${style}`}>
        <div className={styles.colomnHeading}>{heading}</div>
        <div className={styles.listContainer}>
          <TaskList tasks={list} />
          <button
            className={styles.addButton}
            onClick={() => setDisplayAddTaskForm(true)}
          >
            <MdOutlineAdd />
          </button>
        </div>
      </div>
    );
  }

  if (
    projectStatus !== "succeeded" ||
    taskStatus !== "succeeded" ||
    peopleStatus !== "succeeded"
  )
    return "loading...";

  const pendingTasks = tasks
    ? tasks.filter((task) => task.status === TASK_STATUS.PENDING)
    : [];
  const activeTasks = tasks
    ? tasks.filter((task) => task.status === TASK_STATUS.ACTIVE)
    : [];
  const completedTasks = tasks
    ? tasks.filter((task) => task.status === TASK_STATUS.COMPLETED)
    : [];

  return (
    <div className={styles.columnsContainer}>
      {renderList("Pending", pendingTasks, styles.pendingColumn)}
      {renderList("Active", activeTasks, styles.activeColumn)}
      {renderList("Completed", completedTasks, styles.completedColumn)}
      {displayAddTaskForm && (
        <AddEditTaskForm
          handleClose={() => setDisplayAddTaskForm(false)}
          projectId={projectId}
        />
      )}
    </div>
  );
}

export default ProjectPage;
