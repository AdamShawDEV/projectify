import { useState } from "react";
import styles from "./modules/Task.module.css";
import { BiMessageSquareDetail } from "react-icons/bi";
import AddEditTaskForm from "./AddEditTaskForm";
import TaskModal from "./TaskModal";
import { noUserImageUri } from "../../consts";
import PropTypes from "prop-types";

const OPEN_MODAL = {
  NONE: "none",
  NOTE_MODAL: "note modal",
  EDIT_MODAL: "edit modal",
};

function Task({ task, handleUpdateTask, people }) {
  const [openModal, setOpenModal] = useState(OPEN_MODAL.NONE);

  function enterEditMode() {
    setOpenModal(OPEN_MODAL.EDIT_MODAL);
  }

  function handleEditFormSubmit(updatedTaskInfo) {
    handleUpdateTask({
      ...task,
      ...updatedTaskInfo,
    });
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
            <img
              className={styles.portrait}
              src={owner.image ? owner.image : noUserImageUri}
              alt="owner"
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
          handleUpdateTask={handleUpdateTask}
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
          handleFormSubmit={handleEditFormSubmit}
        />
      )}
    </>
  );
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  handleUpdateTask: PropTypes.func.isRequired,
  people: PropTypes.array.isRequired,
};

export default Task;
