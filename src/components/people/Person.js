import styles from "./modules/Person.module.css";
import Button from "../common/Button";
import { useState } from "react";
import AddEditPeopleForm from "./AddEditPeopleForm";
import Modal from "../common/Modal";
import { noUserImageUri } from "../../consts";
import { useNavigate } from "react-router-dom";

function Person({ person, handleFormSubmit, deletePerson }) {
  const [editPersonOpen, setEditPersonOpen] = useState(false);
  const [deleteConfermationOpen, setDeleteConfermationOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={styles.person}
      onClick={() => navigate(`/person/${person.id}`)}
    >
      <img
        className={styles.image}
        src={`${person.image ? person.image : noUserImageUri}`}
        alt="user"
      />
      <h2>{`${person.firstName} ${person.lastName}`}</h2>
      <div className={styles.actionsContainer}>
        <Button onClick={() => setEditPersonOpen(true)}>edit</Button>
        <Button type="error" onClick={() => setDeleteConfermationOpen(true)}>
          delete
        </Button>
      </div>
      {editPersonOpen && (
        <AddEditPeopleForm
          isOpen={editPersonOpen}
          handleClose={() => setEditPersonOpen(false)}
          person={person}
          handleFormSubmit={handleFormSubmit}
        />
      )}
      {deleteConfermationOpen && (
        <Modal
          isOpen={deleteConfermationOpen}
          handleClose={() => setDeleteConfermationOpen(false)}
        >
          <h2>Delete {`${person.firstName} ${person.lastName}?`}</h2>
          <div className={styles.buttonsContainer}>
            <Button type="error" onClick={deletePerson}>
              delete
            </Button>
            <Button onClick={() => setDeleteConfermationOpen(false)}>
              cancel
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Person;
