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
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TaskList from "../project/TaskList";
import Button from "../common/Button";
import AddEditPeopleForm from "./AddEditPeopleForm";

function PersonDetailsPage() {
  const { personId } = useParams();
  const person = useSelector((state) => selectPersonById(state, personId));
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

  if (peopleStatus !== "succeeded" || taskStatus !== "succeeded")
    return "loading...";

  return (
    <div className={styles.columnsContainer}>
      <div className={styles.detailsColumn}>
        <img src="/images/noimage.png" alt="person name" />
        <span>
          <h1>
            {`${person.firstName} ${person.lastName}`}&nbsp;
            <Button onClick={() => setEditPersonOpen(true)}>edit</Button>
          </h1>
        </span>
      </div>
      <div className={styles.activeTasksColumn}>
        <h2>Owned Tasks</h2>
        <TaskList tasks={ownedTasks} />
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

export default PersonDetailsPage;
