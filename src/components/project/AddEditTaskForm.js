import Modal from "../common/Modal";
import Button from "../common/Button";
import { useState } from "react";
import InputText from "../common/InputText";
import Form from "../common/Form";
import TextArea from "../common/TextArea";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../../redux/slices/taskSlice";

const emptyTask = {
  title: "",
  details: "",
  status: "pending",
  owner: "",
  color: "#444",
  duration: 5,
  precidents: [],
  messages: [],
};

function AddEditTaskForm({ task = emptyTask, handleClose, projectId }) {
  const [taskInfo, setTaskInfo] = useState(task);
  const dispatch = useDispatch();

  function handleChange(event) {
    const { id, value } = event.target;

    setTaskInfo((current) => ({ ...current, [id]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    task.id
      ? dispatch(updateTask(taskInfo))
      : dispatch(addTask({ ...taskInfo, projectId }));

    handleClose();
  }

  return (
    <Modal handleClose={handleClose}>
      <h2>{taskInfo.id ? "Edit Task" : "Add Task"}</h2>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="title">Tasks Title:</label>
        <InputText
          id="title"
          placeholder="enter title"
          value={taskInfo.title}
          onChange={(event) => handleChange(event)}
        />
        <label htmlFor="details">Details:</label>
        <TextArea
          id="details"
          placeholder="enter details"
          value={taskInfo.details}
          onChange={(event) => handleChange(event)}
        />
        <Button>submit</Button>
      </Form>
    </Modal>
  );
}

AddEditTaskForm.propTypes = {
  task: PropTypes.object,
  handleClose: PropTypes.func.isRequired,
  projectId: PropTypes.string,
};

export default AddEditTaskForm;
