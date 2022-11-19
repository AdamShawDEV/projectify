import styles from "./modules/PeopleList.module.css";
import Person from "./Person";
import PropTypes from "prop-types";

function PeopleList({ people }) {
  return (
    <div className={styles.peopleListContainer}>
      {people.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </div>
  );
}

PeopleList.propTypes = {
  people: PropTypes.array.isRequired,
};

export default PeopleList;
