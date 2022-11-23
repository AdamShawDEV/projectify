import { useState } from "react";
import styles from "./modules/Task.module.css";
import { BiMessageSquareDetail } from "react-icons/bi";
import AddEditTaskForm from "./AddEditTaskForm";
import TaskModal from "./TaskModal";
import PropTypes from "prop-types";
import { selectAllPeople } from "../../redux/slices/peopleSlice";
import { useSelector } from "react-redux";
import UserImage from "../common/UserImage";

const OPEN_MODAL = {
  NONE: "none",
  NOTE_MODAL: "note modal",
  EDIT_MODAL: "edit modal",
};

function Task({ task }) {
  const [openModal, setOpenModal] = useState(OPEN_MODAL.NONE);
  const people = useSelector(selectAllPeople);

  function enterEditMode() {
    setOpenModal(OPEN_MODAL.EDIT_MODAL);
  }

  const owner = task.owner
    ? people.find((person) => task.owner === person.id)
    : null;

  const taskCard = (
    <div
      className={styles.task}
      onClick={() => setOpenModal(OPEN_MODAL.NOTE_MODAL)}
    >
      <div className={styles.heading}>
        <h2>{task.title}</h2>
        <div className={styles.peopleContainer}>
          {owner && (
            <UserImage
              styles={styles.portrait}
              src={"/images/" + owner.image}
              alt={`${owner.firstName} ${owner.lastName}`}
            />
          )}
        </div>
      </div>
      <p>{task.details}</p>
      <div className={styles.notificationArea}>
        {task.messages.length > 0 && (
          <div className={styles.notification}>
            <BiMessageSquareDetail /> {task.messages.length}{" "}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {taskCard}
      {openModal === OPEN_MODAL.NOTE_MODAL && (
        <TaskModal
          handleClose={() => setOpenModal(OPEN_MODAL.NONE)}
          enterEditMode={enterEditMode}
          task={task}
          taskCard={taskCard}
          people={people}
        />
      )}
      {openModal === OPEN_MODAL.EDIT_MODAL && (
        <AddEditTaskForm
          task={task}
          handleClose={() => setOpenModal(OPEN_MODAL.NOTE_MODAL)}
        />
      )}
    </>
  );
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Task;
