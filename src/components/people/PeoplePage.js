import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  loadPeople,
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
  });

  if (peopleStatus !== "succeeded") return "loading...";

  return (
    <>
      <h1>People</h1>
      <div className={styles.peopleListContainer}>
        <PeopleList people={people} />
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
