import styles from "./modules/PeopleList.module.css";
import Button from "../common/Button";

function PeopleList({ people }) {
  return (
    <div className={styles.peopleListContainer}>
      {people.map((person) => (
        <div key={person.id} className={styles.person}>
          <div className={styles.image}></div>
          <h2>{`${person.firstName} ${person.lastName}`}</h2>
          <div className={styles.actionsContainer}>
            <Button>edit</Button>
            <Button type="error">delete</Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PeopleList;
