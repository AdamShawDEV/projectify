import styles from "./modules/PersonDetailsPage.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectPersonById,
  selectPeopleStatus,
  loadPeople,
  updatePerson,
  deletePerson,
  selectAllPeople,
} from "../../redux/slices/peopleSlice";
import {
  loadTasks,
  selectTasksByPersonId,
  selectTaskStatus,
  addTask,
  updateTask,
} from "../../redux/slices/taskSlice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import TaskList from "../project/TaskList";

function PersonDetailsPage() {
  const { personId } = useParams();
  const person = useSelector((state) => selectPersonById(state, personId));
  const people = useSelector(selectAllPeople);
  const peopleStatus = useSelector(selectPeopleStatus);
  const ownedTasks = useSelector((state) =>
    selectTasksByPersonId(state, personId)
  );
  const taskStatus = useSelector(selectTaskStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (peopleStatus === "idle") dispatch(loadPeople());
    if (taskStatus === "idle") dispatch(loadTasks());
  }, [peopleStatus, taskStatus, dispatch]);

  function handleUpdateTask(task) {
    dispatch(updateTask({ ...task }));
  }

  if (peopleStatus !== "succeeded" || taskStatus !== "succeeded")
    return "loading...";

  console.log(ownedTasks);

  return (
    <div className={styles.columnsContainer}>
      <div className={styles.detailsColumn}>
        <img src="/images/noimage.png" alt="person name" />
        <h1>{`${person.firstName} ${person.lastName}`}</h1>
      </div>
      <div className={styles.activeTasksColumn}>
        <h2>Owned Tasks</h2>
        <TaskList
          tasks={ownedTasks}
          handleUpdateTask={handleUpdateTask}
          people={people}
        />
      </div>
    </div>
  );
}

export default PersonDetailsPage;
