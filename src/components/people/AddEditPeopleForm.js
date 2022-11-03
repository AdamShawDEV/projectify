import Modal from "../common/Modal";
import Button from "../common/Button";
import { useState } from "react";
import InputText from "../common/InputText";
import Form from "../common/Form";

const empryPerson = {
  firstName: "",
  lastName: "",
};

function AddEditPeopleForm({
  person = empryPerson,
  isOpen,
  handleClose,
  handleFormSubmit,
}) {
  const [personInfo, setPersonInfo] = useState(person);

  function handleChange(event) {
    const { id, value } = event.target;

    setPersonInfo((current) => ({ ...current, [id]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    handleFormSubmit(personInfo);
    handleClose();
  }

  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <h2>{person.id ? "Edit Person" : "Add Person"}</h2>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="firstName">First Name:</label>
        <InputText
          id="firstName"
          placeholder="enter first name"
          value={personInfo.firstName}
          onChange={(event) => handleChange(event)}
        />
        <label htmlFor="lastName">First Name:</label>
        <InputText
          id="lastName"
          placeholder="enter last name"
          value={personInfo.lastName}
          onChange={(event) => handleChange(event)}
        />
        <Button>submit</Button>
      </Form>
    </Modal>
  );
}

export default AddEditPeopleForm;
