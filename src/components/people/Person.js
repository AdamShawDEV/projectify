import styles from "./modules/Person.module.css";
import { noUserImageUri } from "../../consts";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function Person({ person }) {
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
    </div>
  );
}

Person.propTypes = {
  person: PropTypes.object.isRequired,
};

export default Person;
