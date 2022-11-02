import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  loadPeople,
  selectAllPeople,
  selectPeopleStatus,
} from "../../redux/slices/peopleSlice";
import PeopleList from "./PeopleList";

function PeoplePage() {
  const dispatch = useDispatch();
  const people = useSelector(selectAllPeople);
  const peopleStatus = useSelector(selectPeopleStatus);

  useEffect(() => {
    if (peopleStatus === "idle") {
      dispatch(loadPeople());
    }
  });

  if (peopleStatus !== "succeeded") return "loading...";

  return (
    <>
      <h1>People</h1>
      <PeopleList people={people} />
    </>
  );
}

export default PeoplePage;
