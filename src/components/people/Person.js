import styles from "./modules/Person.module.css";
import Button from "../common/Button";
import { useState } from "react";
import AddEditPeopleForm from "./AddEditPeopleForm";

function Person({ person }) {
  const [editPersonOpen, setEditPersonOpen] = useState(false);

  return (
    <div className={styles.person}>
      <div className={styles.image}></div>
      <h2>{`${person.firstName} ${person.lastName}`}</h2>
      <div className={styles.actionsContainer}>
        <Button onClick={() => setEditPersonOpen(true)}>edit</Button>
        <Button type="error">delete</Button>
      </div>
      {editPersonOpen && (
        <AddEditPeopleForm
          isOpen={editPersonOpen}
          handleClose={() => setEditPersonOpen(false)}
          person={person}
        />
      )}
    </div>
  );
}

export default Person;
