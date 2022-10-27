import Modal from "../common/Modal";
import Button from "../common/Button";
import styles from "./modules/AddEditTaskForm.module.css";
import { useState } from "react";

const emptyTask = {
  title: "",
  details: "",
  status: "pending",
  color: "#444",
  duration: 5,
  precidents: [],
};

function AddEditTaskForm({ projectId, task = emptyTask, isOpen, handleClose }) {
  const [taskInfo, setTaskInfo] = useState(task);

  function handleChange(event) {
    const { id, value } = event.target;

    setTaskInfo((current) => ({ ...current, [id]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <h2>{taskInfo.id ? "Edit Task" : "Add Task"}</h2>
      <form className={styles.addTaskForm} onSubmit={handleSubmit}>
        <label htmlFor="title">Tasks Title:</label>
        <input
          id="title"
          type="text"
          placeholder="enter title"
          value={taskInfo.title}
          onChange={(event) => handleChange(event)}
          required
        />
        <label htmlFor="details">Details:</label>
        <textarea
          id="details"
          placeholder="enter details"
          value={taskInfo.details}
          onChange={(event) => handleChange(event)}
          required
        />
        <Button>Submit</Button>
      </form>
    </Modal>
  );
}

export default AddEditTaskForm;
