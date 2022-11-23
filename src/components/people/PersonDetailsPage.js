import styles from "./modules/PersonDetailsPage.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectPersonById,
  selectPeopleStatus,
  loadPeople,
} from "../../redux/slices/peopleSlice";
import {
  loadTasks,
  selectTasksByPersonId,
  selectTaskStatus,
} from "../../redux/slices/taskSlice";
import {
  loadProjects,
  selectAllProjects,
  selectProjectStatus,
} from "../../redux/slices/projectSlice";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TaskList from "../project/TaskList";
import Button from "../common/Button";
import AddEditPeopleForm from "./AddEditPeopleForm";
import UserImage from "../common/UserImage";

function PersonDetailsPage() {
  const { personId } = useParams();
  const person = useSelector((state) => selectPersonById(state, personId));
  const peopleStatus = useSelector(selectPeopleStatus);
  const ownedTasks = useSelector((state) =>
    selectTasksByPersonId(state, personId)
  );
  const taskStatus = useSelector(selectTaskStatus);
  const projects = useSelector(selectAllProjects);
  const projectsStatus = useSelector(selectProjectStatus);
  const dispatch = useDispatch();
  const [editPersonOpen, setEditPersonOpen] = useState(false);

  useEffect(() => {
    if (peopleStatus === "idle") dispatch(loadPeople());
    if (taskStatus === "idle") dispatch(loadTasks());
    if (projectsStatus === "idle") dispatch(loadProjects());
  }, [peopleStatus, taskStatus, projectsStatus, dispatch]);

  if (
    peopleStatus !== "succeeded" ||
    taskStatus !== "succeeded" ||
    projectsStatus !== "succeeded"
  )
    return "loading...";

  const sortedTasks = sortTasksByProjet(projects, ownedTasks);

  return (
    <div className={styles.columnsContainer}>
      <div className={styles.detailsColumn}>
        <UserImage
          src={"/images/" + person.image}
          alt={`${person.firstName} ${person.lastName}`}
        />
        <span>
          <h1>
            {`${person.firstName} ${person.lastName}`}&nbsp;
            <Button onClick={() => setEditPersonOpen(true)}>edit</Button>
          </h1>
        </span>
      </div>
      <div className={styles.activeTasksColumn}>
        <h2>Owned Tasks</h2>
        {Object.keys(sortedTasks).map((projectName) => (
          <div key={projectName}>
            <h3>{projectName}</h3>
            <TaskList tasks={sortedTasks[projectName]} />
          </div>
        ))}
      </div>
      {editPersonOpen && (
        <AddEditPeopleForm
          handleClose={() => setEditPersonOpen(false)}
          person={person}
        />
      )}
    </div>
  );
}

function sortTasksByProjet(projects, tasks) {
  let output = {};

  projects.forEach((project) => {
    let projectTasks = tasks.filter((task) => task.projectId === project.id);
    if (projectTasks.length > 0)
      output = { ...output, [project.title]: projectTasks };
  });

  return output;
}

export default PersonDetailsPage;
