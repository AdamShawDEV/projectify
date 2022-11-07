import React, { useEffect, useState } from "react";
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
  addTask,
  updateTask,
} from "../../redux/slices/taskSlice";
import {
  loadPeople,
  selectAllPeople,
  selectPeopleStatus,
} from "../../redux/slices/peopleSlice";
import TaskList from "./TaskList";
import { taskStatusEnum } from "../../consts";
import { MdOutlineAdd } from "react-icons/md";
import AddEditTaskForm from "./AddEditTaskForm";

function ProjectPage() {
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const project = useSelector((state) => selectProjectById(state, projectId));
  const projectStatus = useSelector(selectProjectStatus);
  const tasks = useSelector((state) => selectTaskByProjectId(state, projectId));
  const taskStatus = useSelector(selectTaskStatus);
  const people = useSelector(selectAllPeople);
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

  function handleFormSubmit(task) {
    dispatch(addTask({ task, projectId }));
  }

  function handleUpdateTask(task) {
    dispatch(updateTask({ task, projectId }));
  }

  if (projectStatus !== "succeeded" || taskStatus !== "succeeded")
    return "loading...";

  const pendingTasks = tasks
    ? tasks.filter((task) => task.status === taskStatusEnum.PENDING)
    : [];
  const activeTassks = tasks
    ? tasks.filter((task) => task.status === taskStatusEnum.ACTIVE)
    : [];
  const completedTasks = tasks
    ? tasks.filter((task) => task.status === taskStatusEnum.COMPLETED)
    : [];

  return (
    <div className={styles.columnsContainer}>
      <div className={`${styles.column} ${styles.pendingColumn}`}>
        <div className={styles.colomnHeading}>Pending</div>
        <div className={styles.listContainer}>
          <TaskList
            tasks={pendingTasks}
            project={project}
            handleUpdateTask={handleUpdateTask}
            people={people}
          />
          <button
            className={styles.addButton}
            onClick={() => setDisplayAddTaskForm(true)}
          >
            <MdOutlineAdd />
          </button>
        </div>
      </div>
      <div className={`${styles.column} ${styles.activeColumn}`}>
        <div className={styles.colomnHeading}>Active</div>
        <div className={styles.listContainer}>
          <TaskList
            tasks={activeTassks}
            roject={project}
            handleUpdateTask={handleUpdateTask}
            people={people}
          />
          <button
            className={styles.addButton}
            onClick={() => setDisplayAddTaskForm(true)}
          >
            <MdOutlineAdd />
          </button>
        </div>
      </div>
      <div className={`${styles.column} ${styles.completedColumn}`}>
        <div className={styles.colomnHeading}>Completed</div>
        <div className={styles.listContainer}>
          <TaskList
            tasks={completedTasks}
            roject={project}
            handleUpdateTask={handleUpdateTask}
            people={people}
          />
          <button
            className={styles.addButton}
            onClick={() => setDisplayAddTaskForm(true)}
          >
            <MdOutlineAdd />
          </button>
        </div>
      </div>
      {displayAddTaskForm && (
        <AddEditTaskForm
          isOpen={displayAddTaskForm}
          handleClose={() => setDisplayAddTaskForm(false)}
          projectId={project.id}
          handleFormSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
}

export default ProjectPage;
