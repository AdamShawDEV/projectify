import Modal from "../common/Modal";
import Button from "../common/Button";
import { useState } from "react";

const empryPerson = {
  firstName: "",
  lastName: "",
};

function AddEditPeopleForm({ person = empryPerson, isOpen, handleClose }) {
  const [personInfo, setPersonInfo] = useState(person);

  function handleChange(event) {
    const { id, value } = event.target;

    setPersonInfo((current) => ({ ...current, [id]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    handleClose();
  }

  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <h2>{person.id ? "Edit Person" : "Add Person"}</h2>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          placeholder="enter first name"
          value={personInfo.firstName}
          onChange={(event) => handleChange(event)}
          required
        />
        <label htmlFor="lastName">First Name:</label>
        <input
          type="text"
          id="lastName"
          placeholder="enter last name"
          value={personInfo.lastName}
          onChange={(event) => handleChange(event)}
          required
        />
        <Button>submit</Button>
      </form>
    </Modal>
  );
}

export default AddEditPeopleForm;
