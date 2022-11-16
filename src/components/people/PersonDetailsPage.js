import styles from "./modules/PersonDetailsPage.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectPersonById,
  selectPeopleStatus,
  loadPeople,
  updatePerson,
  selectAllPeople,
} from "../../redux/slices/peopleSlice";
import {
  loadTasks,
  selectTasksByPersonId,
  selectTaskStatus,
  updateTask,
} from "../../redux/slices/taskSlice";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TaskList from "../project/TaskList";
import Button from "../common/Button";
import AddEditPeopleForm from "./AddEditPeopleForm";
import Modal from "../common/Modal";
import { useNavigate } from "react-router-dom";

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
  const [editPersonOpen, setEditPersonOpen] = useState(false);

  useEffect(() => {
    if (peopleStatus === "idle") dispatch(loadPeople());
    if (taskStatus === "idle") dispatch(loadTasks());
  }, [peopleStatus, taskStatus, dispatch]);

  function handleUpdateTask(task) {
    dispatch(updateTask({ ...task }));
  }

  function handleFormSubmit(updatedPerson) {
    dispatch(updatePerson(updatedPerson));
  }

  if (peopleStatus !== "succeeded" || taskStatus !== "succeeded")
    return "loading...";

  return (
    <div className={styles.columnsContainer}>
      <div className={styles.detailsColumn}>
        <img src="/images/noimage.png" alt="person name" />
        <h1>{`${person.firstName} ${person.lastName}`}</h1>
        <Button onClick={() => setEditPersonOpen(true)}>edit</Button>
      </div>
      <div className={styles.activeTasksColumn}>
        <h2>Owned Tasks</h2>
        <TaskList
          tasks={ownedTasks}
          handleUpdateTask={handleUpdateTask}
          people={people}
        />
      </div>
      {editPersonOpen && (
        <AddEditPeopleForm
          isOpen={editPersonOpen}
          handleClose={() => setEditPersonOpen(false)}
          person={person}
          handleFormSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
}

export default PersonDetailsPage;
