import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  loadPeople,
  deletePerson,
  selectAllPeople,
  selectPeopleStatus,
} from "../../redux/slices/peopleSlice";
import PeopleList from "./PeopleList";
import Button from "../common/Button";
import styles from "./modules/PeoplePage.module.css";
import AddEditPeopleForm from "./AddEditPeopleForm";
import { useState } from "react";

function PeoplePage() {
  const dispatch = useDispatch();
  const people = useSelector(selectAllPeople);
  const peopleStatus = useSelector(selectPeopleStatus);
  const [addPersonOpen, setAddPersonOpen] = useState(false);

  useEffect(() => {
    if (peopleStatus === "idle") {
      dispatch(loadPeople());
    }
  }, [peopleStatus, dispatch]);

  function deletePersonById(personId) {
    dispatch(deletePerson(personId));
  }

  if (peopleStatus !== "succeeded") return "loading...";

  return (
    <>
      <div className={styles.peopleListContainer}>
        <h1>People</h1>
        <PeopleList people={people} deletePersonById={deletePersonById} />
        <div className={styles.addButton}>
          <Button onClick={() => setAddPersonOpen(true)}>add person</Button>
        </div>
      </div>
      {addPersonOpen && (
        <AddEditPeopleForm
          isOpen={addPersonOpen}
          handleClose={() => setAddPersonOpen(false)}
        />
      )}
    </>
  );
}

export default PeoplePage;
