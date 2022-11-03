import styles from "./modules/PeopleList.module.css";
import Person from "./Person";

function PeopleList({ people }) {
  return (
    <div className={styles.peopleListContainer}>
      {people.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </div>
  );
}

export default PeopleList;
